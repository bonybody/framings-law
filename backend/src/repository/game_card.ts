import { z } from "zod";
import {
  getObjectPropertyNames,
  getObjectValues,
  setObjectProperty,
} from "../lib/ioredis";
import { singleQuery } from "../lib/pg";

type GameCardBody = {
  gameId: string;
  cardId: string;
  isDeleted: boolean;
};

const gameCardRowSchema = z.object({
  id: z.string(),
  game_id: z.string(),
  card_id: z.string(),
  is_deleted: z.boolean(),
});

const gameCardRowsSchema = z.array(gameCardRowSchema);

type GameCardRow = z.infer<typeof gameCardRowSchema>;

const withDetailSelect =
  "SELECT game_cards.id, game_id, card_id, is_deleted, cards.posted_at, cards.body, cards.commentary, cards.is_framing FROM game_cards, cards";

const gameCardWithDetailRowSchema = z.object({
  id: z.string(),
  game_id: z.string(),
  card_id: z.string(),
  is_deleted: z.boolean(),
  posted_at: z.date(),
  body: z.string(),
  commentary: z.string(),
  is_framing: z.boolean(),
});

const gameCardDetailRowsSchema = z.array(gameCardWithDetailRowSchema);

type GameCardWithDetailRow = z.infer<typeof gameCardRowSchema>;

type GameCardPool = {
  id: string;
  userId: string;
}[];

export class GameCardRepository {
  async create(body: GameCardBody) {
    const res = await singleQuery<GameCardRow>(
      "INSERT INTO game_cards (game_id, card_id, is_deleted) VALUES ($1, $2, $3) RETURNING *",
      [body.gameId, body.cardId, body.isDeleted]
    );
    if (res.rowCount === 0) return null;
    return gameCardRowSchema.parse(res.rows[0]);
  }

  async find(id: string) {
    const res = await singleQuery<GameCardRow>(
      "SELECT * FROM game_cards WHERE id = $1",
      [id]
    );
    if (res.rowCount === 0) return null;
    return gameCardRowSchema.parse(res.rows[0]);
  }
  async pushPool(id: string, gameId: string, userId: string) {
    return await setObjectProperty(`games/${gameId}/vote`, userId, id);
  }

  async findWithDetail(id: string) {
    const res = await singleQuery<GameCardWithDetailRow>(
      `${withDetailSelect} WHERE card_id = cards.id AND game_cards.id = $1`,
      [id]
    );
    if (res.rowCount === 0) return null;
    return gameCardWithDetailRowSchema.parse(res.rows[0]);
  }

  async getWithDetail(gameId: string) {
    const res = await singleQuery<GameCardWithDetailRow>(
      `${withDetailSelect} WHERE card_id = cards.id AND game_id = $1`,
      [gameId]
    );
    if (res.rowCount === 0) return [];
    return gameCardDetailRowsSchema.parse(res.rows);
  }

  async getWithDetailByFraming(gameId: string, isFraming: boolean) {
    const res = await singleQuery<GameCardWithDetailRow>(
      `${withDetailSelect} WHERE card_id = cards.id AND game_id = $1 AND cards.is_framing = ${
        isFraming ? "true" : "false"
      }`,
      [gameId]
    );
    if (res.rowCount === 0) return [];
    return gameCardDetailRowsSchema.parse(res.rows);
  }

  async getWithDetailByDeleted(gameId: string, isDeleted: boolean) {
    const res = await singleQuery<GameCardWithDetailRow>(
      `${withDetailSelect} WHERE card_id = cards.id AND game_id = $1 AND is_deleted = ${
        isDeleted ? "true" : "false"
      }`,
      [gameId]
    );
    if (res.rowCount === 0) return [];
    return gameCardDetailRowsSchema.parse(res.rows);
  }

  async search(
    gameId: string,
    options?: { isDeleted?: boolean; isFraming?: boolean }
  ) {
    if (!options) return await this.getWithDetail(gameId);
    const { isDeleted, isFraming } = options;
    if (isDeleted === undefined && isFraming === undefined)
      return await this.getWithDetail(gameId);
    if (isDeleted !== undefined && isFraming === undefined) {
      return await this.getWithDetailByDeleted(gameId, isDeleted);
    }
    if (isDeleted === undefined && isFraming !== undefined) {
      return await this.getWithDetailByFraming(gameId, isFraming);
    }
    if (isDeleted !== undefined && isFraming !== undefined) {
      const res = await singleQuery<GameCardWithDetailRow>(
        `
        ${withDetailSelect} WHERE card_id = cards.id AND game_id = $1 AND is_deleted = ${
          isDeleted ? "true" : "false"
        } AND cards.is_framing = ${isFraming ? "true" : "false"}`,
        [gameId]
      );
      return gameCardDetailRowsSchema.parse(res.rows);
    }
  }

  async getVostedCardPool(gameId: string) {
    return await getObjectValues(`games/${gameId}/vote`);
  }

  async getVostedUserPool(gameId: string) {
    return await getObjectPropertyNames(`games/${gameId}/vote`);
  }

  async getVostedPool(gameId: string) {
    const idList = await this.getVostedCardPool(gameId);
    const userIdList = await this.getVostedUserPool(gameId);
    return idList.map((id, index) => {
      return {
        id,
        userId: userIdList[index],
      };
    });
  }

  async raiseDeleteflag(id: string) {
    const res = await singleQuery<GameCardRow>(
      "UPDATE [ ONLY ] table_name SET is_deleted = true WHERE id = $1",
      [id]
    );
    if (res.rowCount === 0) return null;
    return gameCardRowSchema.parse(res.rows[0]);
  }
}

import { z } from "zod";
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

type GameCardRow = z.infer<typeof gameCardRowSchema>;

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
}

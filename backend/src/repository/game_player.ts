import { z } from "zod";
import { singleQuery } from "../lib/pg";

type GamePlayerBody = {
  gameId: string;
  userId: string;
  characterId: string;
  isFramer: boolean;
};

const gamePlayerRowSchema = z.object({
  id: z.string(),
  game_id: z.string(),
  user_id: z.string(),
  character_id: z.string(),
  is_framer: z.boolean(),
});

type GamePlayerRow = z.infer<typeof gamePlayerRowSchema>;

const gamePlayersRowSchema = z.array(gamePlayerRowSchema);

const gamePlayerWithCharacterRowSchema = z.object({
  id: z.string(),
  game_id: z.string(),
  user_id: z.string(),
  character_id: z.string(),
  is_framer: z.boolean(),
  display_name: z.string(),
  image_url: z.string(),
});

const gamePlayerWithCharactersRowSchema = z.array(
  gamePlayerWithCharacterRowSchema
);
type GamePlayerWithCharacterRow = z.infer<
  typeof gamePlayerWithCharacterRowSchema
>;

export class GamePlayerRepository {
  async create(body: GamePlayerBody) {
    const res = await singleQuery<GamePlayerRow>(
      "INSERT INTO game_players (game_id, user_id, character_id, is_framer) VALUES ($1, $2, $3, $4) RETURNING *",
      [body.gameId, body.userId, body.characterId, body.isFramer]
    );
    if (res.rowCount === 0) return null;
    return gamePlayerRowSchema.parse(res.rows[0]);
  }

  async find(id: string) {
    const res = await singleQuery<GamePlayerRow>(
      "SELECT * FROM game_players WHERE id = $1",
      [id]
    );
    if (res.rowCount === 0) return null;
    return gamePlayerRowSchema.parse(res.rows[0]);
  }

  async get(gameId: string) {
    const res = await singleQuery<GamePlayerRow>(
      "SELECT * FROM game_players WHERE game_id = $1",
      [gameId]
    );
    if (res.rowCount === 0) return null;
    return gamePlayersRowSchema.parse(res.rows);
  }

  async findWithCharacter(id: string) {
    const res = await singleQuery<GamePlayerWithCharacterRow>(
      "SELECT game_players.id, game_id, user_id, character_id, is_framer, display_name, image_url FROM game_players INNER JOIN characters ON game_players.character_id = characters.id  WHERE game_players.id = $1",
      [id]
    );

    if (res.rowCount === 0) return null;
    return gamePlayerWithCharacterRowSchema.parse(res.rows[0]);
  }

  async findWithCharacterByUserId(gameId: string, userId: string) {
    const res = await singleQuery<GamePlayerWithCharacterRow>(
      "SELECT game_players.id, game_id, user_id, character_id, is_framer, display_name, image_url  FROM game_players INNER JOIN characters ON game_players.character_id = characters.id WHERE game_id = $1 AND user_id = $2",
      [gameId, userId]
    );
    if (res.rowCount === 0) return null;
    return gamePlayerWithCharacterRowSchema.parse(res.rows[0]);
  }

  async getWithCharacter(gameId: string) {
    const res = await singleQuery<GamePlayerWithCharacterRow>(
      "SELECT game_players.id, game_id, user_id, character_id, is_framer, display_name, image_url FROM game_players INNER JOIN characters ON game_players.character_id = characters.id WHERE game_id = $1",
      [gameId]
    );
    if (res.rowCount === 0) return null;
    return gamePlayerWithCharactersRowSchema.parse(res.rows);
  }
}

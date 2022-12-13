import { z } from "zod";
import { singleQuery } from "../lib/pg";

type GameBody = {
  roomId: string;
  gameStatusId: string;
};

const gameRowSchema = z.object({
  id: z.string(),
  room_id: z.string(),
  game_status_id: z.string(),
});

type GameRow = z.infer<typeof gameRowSchema>;

const gameWithStatusRowSchema = z.object({
  id: z.string(),
  room_id: z.string(),
  game_status_id: z.string(),
  status_code: z.string(),
});

const gameWithStatusRowsSchema = z.array(gameWithStatusRowSchema);

type GameWithStatusRow = z.infer<typeof gameWithStatusRowSchema>;
const withStatusSelect =
  "SELECT games.id, room_id, game_status_id, game_statuses.status_code FROM games, game_statuses";

export class GameRepository {
  async create(body: GameBody) {
    const res = await singleQuery<GameRow>(
      "INSERT INTO games (room_id, game_status_id) VALUES ($1, $2) RETURNING *",
      [body.roomId, body.gameStatusId]
    );
    if (res.rowCount === 0) return null;
    return gameRowSchema.parse(res.rows[0]);
  }

  async find(id: string) {
    const res = await singleQuery<GameWithStatusRow>(
      `${withStatusSelect} WHERE id = $1`,
      [id]
    );
    if (res.rowCount === 0) return null;
    return gameWithStatusRowSchema.parse(res.rows[0]);
  }
}

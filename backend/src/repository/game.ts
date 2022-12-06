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
    const res = await singleQuery<GameRow>(
      "SELECT * FROM games WHERE id = $1",
      [id]
    );
    if (res.rowCount === 0) return null;
    return gameRowSchema.parse(res.rows[0]);
  }
}

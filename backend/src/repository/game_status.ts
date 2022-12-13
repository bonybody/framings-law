import { z } from "zod";
import { singleQuery } from "../lib/pg";

const gameStatusRowSchema = z.object({
  id: z.string(),
  status_code: z.string(),
});

type GameStatusRow = z.infer<typeof gameStatusRowSchema>;

export class GameStatusRepository {
  async find(id: string) {
    const res = await singleQuery<GameStatusRow>(
      "SELECT * FROM game_statuses WHERE id = ($1)",
      [id]
    );
    if (res.rowCount === 0) return null;
    return gameStatusRowSchema.parse(res.rows[0]);
  }

  async findByCode(code: string) {
    const res = await singleQuery<GameStatusRow>(
      "SELECT * FROM game_statuses WHERE status_code = ($1)",
      [code]
    );
    if (res.rowCount === 0) return null;
    return gameStatusRowSchema.parse(res.rows[0]);
  }
}

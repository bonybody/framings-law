import { z } from "zod";
import { singleQuery } from "../lib/pg";

const roomStatusRowSchema = z.object({
  id: z.string(),
  status_code: z.string(),
});

type RoomStatusRow = z.infer<typeof roomStatusRowSchema>;

export class RoomStatusesRepository {
  async find(id: string) {
    const res = await singleQuery<RoomStatusRow>(
      "SELECT * FROM room_statuses WHERE id = ($1)",
      [id]
    );
    if (res.rowCount === 0) return null;

    return roomStatusRowSchema.parse(res.rows[0]);
  }

  async findByCode(status_code: string) {
    const res = await singleQuery<RoomStatusRow>(
      "SELECT * FROM room_statuses WHERE status_code = ($1)",
      [status_code]
    );
    if (res.rowCount === 0) return null;

    return roomStatusRowSchema.parse(res.rows[0]);
  }
}

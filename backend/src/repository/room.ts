import { z } from "zod";
import { singleQuery } from "../lib/pg";

type RoomBody = {
  hostUserId: string;
  roomStatusId: string;
  roomKey: string;
  cardCount: number;
  debateSeconds: number;
};

const roomRowSchema = z.object({
  id: z.string(),
  host_user_id: z.string(),
  room_status_id: z.string(),
  room_key: z.string(),
  card_count: z.number(),
  debate_seconds: z.number(),
});

type RoomRow = z.infer<typeof roomRowSchema>;

export class RoomRepository {
  async create(body: RoomBody) {
    const res = await singleQuery<RoomRow>(
      "INSERT INTO rooms (host_user_id, room_status_id, room_key, card_count, debate_seconds) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        body.hostUserId,
        body.roomStatusId,
        body.roomKey,
        body.cardCount,
        body.debateSeconds,
      ]
    );
    if (res.rowCount === 0) return null;
    return roomRowSchema.parse(res.rows[0]);
  }

  async find(id: string) {
    const res = await singleQuery<RoomRow>(
      "SELECT * FROM rooms WHERE id = $1",
      [id]
    );
    if (res.rowCount === 0) return null;
    return roomRowSchema.parse(res.rows[0]);
  }
}

import { singleQuery } from "../lib/pg";
import { z } from "zod";

type UserBody = {
  firebaseUid: string;
};

const userRowSchema = z.object({
  id: z.string(),
  firebase_uid: z.string(),
});

const userRowsSchema = z.array(userRowSchema);

type UserRow = z.infer<typeof userRowSchema>;
type UserRows = z.infer<typeof userRowsSchema>;

export class UserRepository {
  async createUser(body: UserBody) {
    const res = await singleQuery<UserRow>(
      "INSERT INTO users(firebase_uid) VALUES ($1) RETURNING *",
      [body.firebaseUid]
    );
    if (res.rowCount === 0) return null;
    return userRowSchema.parse(res.rows[0]);
  }

  async findUser(id: string) {
    const res = await singleQuery<UserRow>(
      "SELECT * FROM users WHERE id = ($1)",
      [id]
    );
    if (res.rowCount === 0) return null;
    return userRowSchema.parse(res.rows[0]);
  }

  async findUserByfirebaseUid(uid: string) {
    const res = await singleQuery<UserRow>(
      "SELECT * FROM users WHERE firebase_uid = ($1)",
      [uid]
    );
    if (res.rowCount === 0) return null;
    return userRowSchema.parse(res.rows[0]);
  }
}

export const userRepository = new UserRepository();

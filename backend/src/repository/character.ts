import { z } from "zod";
import { singleQuery } from "../lib/pg";

type characterBody = {
  displayName: string;
  imageUrl: string;
};

const characterRowSchema = z.object({
  id: z.string(),
  display_name: z.string(),
  image_url: z.string(),
});

const charactersRowSchema = z.array(characterRowSchema);
type characterRow = z.infer<typeof characterRowSchema>;

export class CharacterRepository {
  async create(body: characterBody) {
    const res = await singleQuery<characterRow>(
      "INSERT INTO characters (display_name, image_url) VALUES ($1, $2) RETURNING *",
      [body.displayName, body.imageUrl]
    );
    if (res.rowCount === 0) return null;
    return characterRowSchema.parse(res.rows[0]);
  }

  async find(id: string) {
    const res = await singleQuery<characterRow>(
      "SELECT * FROM characters WHERE id = $1",
      [id]
    );
    if (res.rowCount === 0) return null;
    return characterRowSchema.parse(res.rows[0]);
  }
  async getLimit(limit: number) {
    const res = await singleQuery<characterRow>(
      "SELECT * FROM characters LIMIT $1",
      [limit]
    );
    if (res.rowCount === 0) return null;
    return charactersRowSchema.parse(res.rows);
  }
}

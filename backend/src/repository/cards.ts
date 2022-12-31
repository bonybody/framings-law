import { z } from "zod";
import { singleQuery } from "../lib/pg";

type CardBody = {
  postedAt: string;
  body: string;
  commentary: string;
  isFraming: boolean;
};

const cardRowSchema = z.object({
  id: z.string(),
  posted_at: z.date(),
  body: z.string(),
  commentary: z.string(),
  is_framing: z.boolean(),
});

const cardsRowSchema = z.array(cardRowSchema);

type CardRow = z.infer<typeof cardRowSchema>;

export class CardRepository {
  async create(body: CardBody) {
    const res = await singleQuery<CardRow>(
      "INSERT INTO cards (posted_at, body, commentary, is_framing) VALUES ($1, $2, $3, $4) RETURNING *",
      [body.body, body.commentary, body.commentary, body.isFraming]
    );
    if (res.rowCount === 0) return null;
    return cardRowSchema.parse(res.rows[0]);
  }

  async searchByIsFramingLimit(isFraming: boolean, limit: number) {
    const res = await singleQuery<CardRow>(
      "SELECT * FROM cards WHERE is_framing = $1 LIMIT $2",
      [isFraming, limit]
    );
    if (res.rowCount === 0) return null;
    return cardsRowSchema.parse(res.rows);
  }
}

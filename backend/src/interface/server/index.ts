import express, { Application, Request, Response, urlencoded } from "express";
import { CONFIG } from "../../config";

const { server } = CONFIG;
const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/health", async (_req: Request, res: Response) => {
  return res.status(200).send({ status: "ok" });
});

try {
  app.listen(server.port, () => {
    console.log(`Started Server At: http://localhost:${server.port}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}

import express, { Application, Request, Response, urlencoded } from "express";
import { CONFIG } from "../../config";
import { initApp } from "../../lib/firebase-admin";
import { gamesCardsRouter, gamesRouter, roomsRouter } from "./handler";
import cors from "cors";

const { server } = CONFIG;
initApp();
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// APIサーバーのヘルスチェック用
app.get("/health", async (_req: Request, res: Response) => {
  return res.status(200).send({ status: "ok" });
});

app.use(roomsRouter);
app.use(gamesRouter);
app.use(gamesCardsRouter);

try {
  app.listen(server.port, () => {
    console.log(`Started Server At: http://localhost:${server.port}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}

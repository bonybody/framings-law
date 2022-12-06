import { Router } from "express";
import { paths } from "../../../../schema";
import { GameUseCase } from "../../../usecase/game";
import { GamePlayerUseCase } from "../../../usecase/game_player";
import { authMiddleware } from "../middleware/auth";

const gameUseCase = GameUseCase.factory();
const gamePlayerUseCase = GamePlayerUseCase.factory();
const gamesRouter = Router();

gamesRouter.post("/games/", authMiddleware, async (req, res) => {
  const reqBody = req.body;
  const id = await gameUseCase.create(reqBody.roomId);
  const resBody: paths["/games/"]["post"]["responses"]["201"]["content"]["application/json"] =
    { id };
  res.send(resBody);
});

gamesRouter.get("/games/:gameId/players", authMiddleware, async (req, res) => {
  const gameId = req.params.gameId;
  const players = await gamePlayerUseCase.get(gameId);
  const resBody: paths["/games/{gameId}/players"]["get"]["responses"]["200"]["content"]["application/json"] =
    { players };
  res.status(200).send(resBody);
});

gamesRouter.get(
  "/games/:gameId/players/:playerId",
  authMiddleware,
  async (req, res) => {
    const playerId = req.params.playerId;
    const player = await gamePlayerUseCase.find(playerId);
    const resBody: paths["/games/{gameId}/players/{playerId}"]["get"]["responses"]["200"]["content"]["application/json"] =
      { player };
    res.status(200).send(resBody);
  }
);

export { gamesRouter };

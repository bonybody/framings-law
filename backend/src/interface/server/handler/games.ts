import { Router } from "express";
import { paths } from "../../../schema";
import { GameUseCase } from "../../../usecase/game";
import { GamePlayerUseCase } from "../../../usecase/game_player";
import { authMiddleware } from "../middleware/auth";
import {
  GameHealthCheckUseCase,
  GameProgressUseCase,
  GameCardUseCase,
} from "../../../usecase";

const gameUseCase = GameUseCase.factory();
const gamePlayerUseCase = GamePlayerUseCase.factory();
const gameHealthCheckUseCase = GameHealthCheckUseCase.factory();
const gameProgressUseCase = GameProgressUseCase.factory();
const gameCardUseCase = GameCardUseCase.factory();
const gamesRouter = Router();

gamesRouter.post("/games/", authMiddleware, async (req, res) => {
  try {
    const reqBody = req.body;
    const id = await gameUseCase.create(reqBody.roomId);
    const resBody: paths["/games/"]["post"]["responses"]["201"]["content"]["application/json"] =
      { id };
    res.send(resBody);
  } catch (error) {
    res.status(400).send();
  }
});

gamesRouter.get("/games/:gameId", authMiddleware, async (req, res) => {
  try {
    const gameId = req.params.gameId;
    console.log(res.locals);
    const progress = await gameProgressUseCase.now(gameId);
    res.status(200).send(progress);
  } catch (error) {
    res.status(400).send();
  }
});

gamesRouter.post(
  "/games/:gameId/health-check",
  authMiddleware,
  async (req, res) => {
    try {
      const gameId = req.params.gameId;
      const userId = res.locals.firebaseUid;
      const player = await gamePlayerUseCase.findByUserId(gameId, userId);
      await gameHealthCheckUseCase.push(gameId, player.id);
      res.status(200).send();
    } catch (error) {
      res.status(400).send();
    }
  }
);

gamesRouter.get("/games/:gameId/players", authMiddleware, async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const players = await gamePlayerUseCase.get(gameId);
    const resBody: paths["/games/{gameId}/players"]["get"]["responses"]["200"]["content"]["application/json"] =
      { players };
    res.status(200).send(resBody);
  } catch (error) {
    res.status(400).send();
  }
});

gamesRouter.get(
  "/games/:gameId/players/me",
  authMiddleware,
  async (req, res) => {
    try {
      const gameId = req.params.gameId;
      const userId = res.locals.firebaseUid;
      const player = await gamePlayerUseCase.findByUserId(gameId, userId);
      const resBody: paths["/games/{gameId}/players/me"]["get"]["responses"]["200"]["content"]["application/json"] =
        {
          player,
        };
      res.send(resBody);
    } catch (error) {
      res.status(400).send();
    }
  }
);

gamesRouter.get(
  "/games/:gameId/players/:playerId",
  authMiddleware,
  async (req, res) => {
    try {
      const playerId = req.params.playerId;
      const player = await gamePlayerUseCase.find(playerId);
      const resBody: paths["/games/{gameId}/players/{playerId}"]["get"]["responses"]["200"]["content"]["application/json"] =
        { player };
      res.status(200).send(resBody);
    } catch (error) {
      res.status(400).send();
    }
  }
);

gamesRouter.post("/games/:gameId/vote", authMiddleware, async (req, res) => {
  try {
    const { gameCardId } = req.body;
    const gameId = req.params.gameId;
    const userId = res.locals.firebaseUid;
    const player = await gamePlayerUseCase.findByUserId(gameId, userId);
    await gameCardUseCase.vote(gameCardId, gameId, player.id);
    res.status(200).send();
  } catch (error) {
    res.status(400).send();
  }
});

export { gamesRouter };

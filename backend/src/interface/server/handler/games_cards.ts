import { Router } from "express";
import { paths } from "../../../../schema";
import { GameCardUseCase } from "../../../usecase/game_card";
import { GamePlayerUseCase } from "../../../usecase/game_player";
import { authMiddleware } from "../middleware/auth";

const gameCardUseCase = GameCardUseCase.factory();
const gamesCardsRouter = Router();

gamesCardsRouter.get(
  "/games/:gameId/cards",
  authMiddleware,
  async (req, res) => {
    const gameId = req.params.gameId;
    const query = req.query;
    const isFraming =
      query.is_framing !== undefined ? query.is_framing === "true" : undefined;
    const isDeleted =
      query.is_deleted !== undefined ? query.is_deleted === "true" : undefined;
    const options = {
      isFraming,
      isDeleted,
    };
    const cards = await gameCardUseCase.search(gameId, options);
    const resBody: paths["/games/{gameId}/cards"]["get"]["responses"]["200"]["content"]["application/json"] =
      { cards };
    res.send(resBody);
  }
);

gamesCardsRouter.get(
  "/games/:gameId/cards/:cardId",
  authMiddleware,
  async (req, res) => {
    const cardId = req.params.cardId;
    const card = await gameCardUseCase.find(cardId);
    const resBody: paths["/games/{gameId}/cards/{cardId}"]["get"]["responses"]["200"]["content"]["application/json"] =
      { card };
    res.status(200).send(resBody);
  }
);

export { gamesCardsRouter };

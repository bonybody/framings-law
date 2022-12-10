import { gameTriggers, roomTriggers } from "../../lib/pusher";
import { GameCardRepository, GamePlayerRepository } from "../../repository";
import { GameCardUseCase } from "../../usecase/game_card";
import { GamePlayerUseCase } from "../../usecase/game_player";

// const gamePlayerUsecase = GamePlayerUseCase.factory();
// const hoge = new GamePlayerRepository();
// hoge.findWithCharacter("f0665783-78d2-4c37-a764-8389221086fa").then((v) => {
//   console.log(v);
// });

gameTriggers.ready("aaaa", 1);

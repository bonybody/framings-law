import { GamePlayerRepository } from "../../repository";
import { GamePlayerUseCase } from "../../usecase/game_player";

// const gamePlayerUsecase = GamePlayerUseCase.factory();
const hoge = new GamePlayerRepository();
hoge.findWithCharacter("f0665783-78d2-4c37-a764-8389221086fa").then((v) => {
  console.log(v);
});

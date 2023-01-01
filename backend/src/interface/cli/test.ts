import { signInAnonymously } from "../../lib/firebase";
import { UserRepository } from "../../repository";
import {
  GameCardUseCase,
  GameHealthCheckUseCase,
  GameProgressUseCase,
  GameUseCase,
  RoomUseCase,
} from "../../usecase";
import { GamePlayerUseCase } from "../../usecase/game_player";

const userRepository = new UserRepository();
const roomUseCase = RoomUseCase.factory();
const gameUseCase = GameUseCase.factory();
const gamePlayerUseCase = GamePlayerUseCase.factory();
const gameHealthCheckUseCase = GameHealthCheckUseCase.factory();
const gameProgressUseCase = GameProgressUseCase.factory();
const gameCardUseCase = GameCardUseCase.factory();

(async () => {
  console.log("テスト");
  console.log("匿名ログイン1");
  const cred1 = await signInAnonymously();
  const uid1 = await cred1.user.uid;
  await userRepository.createUser({ firebaseUid: uid1 });
  console.log("uid1: ", uid1);

  console.log("ユーザー1ルーム作成");
  const room = await roomUseCase.create(uid1);
  console.log("作成したルーム", room);

  console.log("ゲーム開始");
  const gameId = await gameUseCase.create(room.id);

  // console.log("作成したゲームのid: ", gameId);
  // console.log("プレイヤー一覧", await gamePlayerUseCase.get(gameId));
  const gameCards = await gameCardUseCase.get(gameId);
  const flamingCards = gameCards.filter((card) => {
    return card.card.isFraming;
  });
  console.log("投稿一覧", gameCards);

  // console.log("プレイヤー1情報取得");
  const player1 = await gamePlayerUseCase.findByUserId(gameId, uid1);
  // console.log(player1);

  console.log("readyが開始しているはず");
  console.log(
    "現在のゲームのステータス",
    await gameProgressUseCase.now(gameId)
  );

  console.log("ユーザーヘルスチェック");
  await gameHealthCheckUseCase.push(gameId, player1.id);
  console.log("debateが開始しているはず");
  console.log("現在のゲームステータス", await gameProgressUseCase.now(gameId));

  console.log("ユーザーヘルスチェック");
  await gameHealthCheckUseCase.push(gameId, player1.id);
  console.log("voteが開始しているはず");
  console.log("現在のゲームステータス", await gameProgressUseCase.now(gameId));

  console.log("削除投稿の投票");
  await gameCardUseCase.vote(flamingCards[0].id, gameId, player1.id);

  console.log("ユーザーヘルスチェック");
  await gameHealthCheckUseCase.push(gameId, player1.id);
  console.log("totallingが開始しているはず");
  console.log("現在のゲームステータス", await gameProgressUseCase.now(gameId));

  console.log("ユーザーヘルスチェック");
  await gameHealthCheckUseCase.push(gameId, player1.id);
  console.log("readyが開始しているはず");
  console.log("現在のゲームステータス", await gameProgressUseCase.now(gameId));

  console.log("ユーザーヘルスチェック");
  await gameHealthCheckUseCase.push(gameId, player1.id);
  console.log("debateが開始しているはず");
  console.log("現在のゲームステータス", await gameProgressUseCase.now(gameId));

  console.log("ユーザーヘルスチェック");
  await gameHealthCheckUseCase.push(gameId, player1.id);
  console.log("voteが開始しているはず");
  console.log("現在のゲームステータス", await gameProgressUseCase.now(gameId));

  console.log("削除投稿の投票");
  await gameCardUseCase.vote(flamingCards[1].id, gameId, player1.id);

  console.log("ユーザーヘルスチェック");
  await gameHealthCheckUseCase.push(gameId, player1.id);
  console.log("totallingが開始しているはず");
  console.log("現在のゲームステータス", await gameProgressUseCase.now(gameId));

  console.log("ユーザーヘルスチェック");
  await gameHealthCheckUseCase.push(gameId, player1.id);
  console.log("resultが開始しているはず");
  console.log("現在のゲームステータス", await gameProgressUseCase.now(gameId));
})();

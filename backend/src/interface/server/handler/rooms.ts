import { Router } from "express";
import { paths } from "../../../schema";
import { RoomUseCase } from "../../../usecase";
import { authMiddleware } from "../middleware/auth";

const roomUseCase = RoomUseCase.factory();
const roomsRouter = Router();

roomsRouter.post("/rooms/", authMiddleware, async (req, res) => {
  try {
    const userId = res.locals.firebaseUid;
    const room = await roomUseCase.create(userId);
    const body: paths["/rooms/"]["post"]["responses"]["200"]["content"]["application/json"] =
      room;
    res.send(body);
  } catch (error) {
    res.status(400).send();
  }
});

roomsRouter.get("/rooms/:roomId", authMiddleware, async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const room = await roomUseCase.find(roomId);
    res.status(200).send(room);
  } catch (error) {
    res.status(400).send();
  }
});

roomsRouter.post("/rooms/:roomId/joins", authMiddleware, async (req, res) => {
  try {
    const userId = res.locals.firebaseUid;
    const roomId = req.params.roomId;
    const users = await roomUseCase.join(roomId, userId);
    const body: paths["/rooms/{roomId}/joins"]["post"]["responses"]["200"]["content"]["application/json"] =
      { users };
    res.status(200).send(body);
  } catch (error) {
    res.status(400).send();
  }
});

roomsRouter.get("/rooms/:roomId/joins", authMiddleware, async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const users = await roomUseCase.getJoinUsers(roomId);
    const resBody: paths["/rooms/{roomId}/joins"]["get"]["responses"]["200"]["content"]["application/json"] =
      { users };
    res.status(200).send(resBody);
  } catch (error) {
    res.status(400).send();
  }
});

roomsRouter.post("/rooms/:roomId/readies", authMiddleware, async (req, res) => {
  try {
    const userId = res.locals.firebaseUid;
    const roomId = req.params.roomId;
    const users = await roomUseCase.ready(roomId, userId);
    const body: paths["/rooms/{roomId}/readies"]["post"]["responses"]["200"]["content"]["application/json"] =
      { users };
    res.status(200).send(body);
  } catch (error) {
    res.status(400).send();
  }
});

roomsRouter.get("/rooms/:roomId/readies", authMiddleware, async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const users = await roomUseCase.getReadyUsers(roomId);
    const resBody: paths["/rooms/{roomId}/readies"]["get"]["responses"]["200"]["content"]["application/json"] =
      { users };
    res.status(200).send(resBody);
  } catch (error) {
    res.status(400).send();
  }
});

roomsRouter.get("/rooms/:roomId/users", authMiddleware, async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const users = await roomUseCase.getUsers(roomId);
    const resBody: paths["/rooms/{roomId}/users"]["get"]["responses"]["200"]["content"]["application/json"] =
      users;
    res.status(200).send(resBody);
  } catch (error) {
    res.status(400).send();
  }
});

export { roomsRouter };

import { Router } from "express";

const roomsRouter = Router();

roomsRouter.post("/", (req, res) => {
  res.send("this is the rooms");
});

export { roomsRouter };

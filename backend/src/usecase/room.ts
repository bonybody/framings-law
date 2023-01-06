import { RoomRepository, RoomStatusesRepository } from "../repository";
import { uuid } from "uuidv4";
import { getList, pushList } from "../lib/ioredis";
import { Room, RoomUsers } from "../model";
import { getTrigger, roomTriggers } from "../lib/pusher";

export class RoomUseCase {
  private roomRepository: RoomRepository;
  private roomStatusRepository: RoomStatusesRepository;
  constructor(
    roomRepository: RoomRepository,
    roomStatusRepository: RoomStatusesRepository
  ) {
    this.roomRepository = roomRepository;
    this.roomStatusRepository = roomStatusRepository;
  }

  static factory() {
    return new RoomUseCase(new RoomRepository(), new RoomStatusesRepository());
  }

  async create(hostUserId: string): Promise<Room> {
    const status = await this.roomStatusRepository.findByCode("waiting");
    if (status === null) throw new Error();
    const baseUuid = uuid();
    const hexArray: number[] = baseUuid
      .split("-")
      .join("")
      .split("", 16)
      .map((hex: string) => parseInt(hex, 16));
    const roomKey = Buffer.from(hexArray).toString("base64").replace("==", "");
    const room = await this.roomRepository.create({
      hostUserId: hostUserId,
      roomStatusId: status.id,
      roomKey,
      cardCount: 6,
      debateSeconds: 600,
    });
    if (room === null) throw new Error();
    await this.join(room.id, hostUserId);
    await this.ready(room.id, hostUserId);
    return {
      id: room.id,
      hostUerId: room.host_user_id,
      cardCount: room.card_count,
      debateSeconds: room.debate_seconds,
      key: room.room_key,
      status: {
        id: status.id,
        code: status.status_code,
      },
    };
  }

  async find(roomId: string): Promise<Room> {
    const room = await this.roomRepository.find(roomId);
    if (room === null) throw new Error();
    const status = await this.roomStatusRepository.find(room.room_status_id);
    if (status === null) throw new Error();
    return {
      id: room.id,
      hostUserId: room.host_user_id,
      cardCount: room.card_count,
      debateSeconds: room.debate_seconds,
      key: room.room_key,
      status: {
        id: status.id,
        code: status.status_code,
      },
    };
  }

  async join(roomId: string, userId: string): Promise<RoomUsers["join"]> {
    await pushList(`rooms/${roomId}/join`, [userId]);
    const users = await this.getJoinUsers(roomId);
    await roomTriggers.join(roomId, users);
    return users;
  }
  async getJoinUsers(roomId: string): Promise<RoomUsers["join"]> {
    return await getList(`rooms/${roomId}/join`);
  }

  async ready(roomId: string, userId: string): Promise<RoomUsers["ready"]> {
    pushList(`rooms/${roomId}/ready`, [userId]);
    const users = await getList(`rooms/${roomId}/ready`);
    await roomTriggers.ready(roomId, users);
    return users;
  }

  async getReadyUsers(roomId: string): Promise<RoomUsers["ready"]> {
    return await getList(`rooms/${roomId}/ready`);
  }

  async getUsers(roomId: string): Promise<RoomUsers> {
    return {
      join: await this.getJoinUsers(roomId),
      ready: await this.getReadyUsers(roomId),
    };
  }
}

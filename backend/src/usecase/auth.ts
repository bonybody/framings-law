import { checkIdToken } from "../lib/firebase-admin";
import { UserRepository } from "../repository";
export class AuthUseCase {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async checkIdToken(idToken?: string) {
    if (idToken === undefined) return undefined;
    const [type, body] = idToken.split(" ");
    if (type !== "Bearer") return undefined;
    const deocded = await checkIdToken(body);
    const uid = deocded.uid;
    const maybeUser = await this.userRepository.findUserByfirebaseUid(uid);
    if (maybeUser) return maybeUser;
    const userBody = {
      firebaseUid: uid,
    };
    if (!maybeUser) return await this.userRepository.createUser(userBody);
  }
}

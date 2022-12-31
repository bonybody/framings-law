import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getAuth as getFireAuth } from "firebase-admin/auth";
import serviceAccountKey from "../../serviceAccountKey.json";
export const initApp = () => {
  return initializeApp({
    credential: cert(serviceAccountKey as unknown as ServiceAccount),
  });
};
export const getAuth = () => {
  return getFireAuth();
};

export const checkIdToken = async (idToken: string) => {
  const auth = getFireAuth();
  const decoded = await auth.verifyIdToken(idToken);
  return decoded;
};

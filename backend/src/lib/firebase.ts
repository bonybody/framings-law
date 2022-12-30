import { initializeApp } from "firebase/app";
import {
  getAuth as getFireAuth,
  signInAnonymously as fireSignInAnonymously,
} from "firebase/auth";
import { CONFIG } from "../config";
export const initApp = () => {
  const config = CONFIG.firebase;
  return initializeApp(config);
};
export const getAuth = () => {
  return getFireAuth(initApp());
};

export const signInAnonymously = () => {
  const auth = getAuth();
  return fireSignInAnonymously(auth);
};

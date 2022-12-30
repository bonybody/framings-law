import { signInAnonymously, initApp, getAuth } from "../../lib/firebase";

const login = async () => {
  const cred = await signInAnonymously();
  const idToken = await cred.user.getIdToken();
  console.log(idToken);
};

login();

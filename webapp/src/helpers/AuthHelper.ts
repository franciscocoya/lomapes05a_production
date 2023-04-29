import {
  handleIncomingRedirect,
  login,
} from "@inrupt/solid-client-authn-browser";
import { basePath } from "../config/dotenv.config";

async function signIn(session: any, providerUrl: string) {
  if (!session.info.isLoggedIn) {
    await login({
      oidcIssuer: encodeURI(providerUrl),
      redirectUrl: basePath,
      clientName: "Lomap",
    });
  }

  await handleIncomingRedirect();
}

export { signIn };


import { Google } from "arctic";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_SECRET_ID;
const redirectUri = process.env.GOOGLE_REDIRECT_URI;

export const google = new Google(clientId, clientSecret, redirectUri);

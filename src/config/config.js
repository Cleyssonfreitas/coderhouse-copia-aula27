import dotenv from 'dotenv';

dotenv.config();

const config = {
  app: {
    port: process.env.PORT || 3000,
    sessionSecret: process.env.SESSION_SECRET,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
  github: {
    clientID: process.env.GITHUB_LOGIN_CLIENT_ID,
    clientSecret: process.env.GITHUB_LOGIN_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_LOGIN_CALLBACK_URL,
  },
};

export default config;
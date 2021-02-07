const { parsed } = require('dotenv').config();
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { env: parsed }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    env: {
      isDev,
      REDIRECT_URI: isDev
        ? 'http://localhost:3000/api/callback'
        : 'https://nextjs-chakra-auth0.vercel.app/api/callback',
      POST_LOGOUT_REDIRECT_URI: isDev
        ? 'http://localhost:3000/secret'
        : 'https://nextjs-chakra-auth0.vercel.app/secret',
      AUTH0_SCOPE: 'openid profile',
      SERVER_URL: isDev
        ? 'http://localhost:3000'
        : 'https://nextjs-chakra-auth0.vercel.app',
    },
  };
};

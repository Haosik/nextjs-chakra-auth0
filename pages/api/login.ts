import { NextApiHandler } from 'next';
import auth0 from '../../lib/auth0';

const login: NextApiHandler = async (req, res) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (err) {
    res.status(err.status | 500).end(err.message);
  }
};

export default login;

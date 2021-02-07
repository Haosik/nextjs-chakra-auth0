import { NextApiHandler } from 'next';
import auth0 from '../../lib/auth0';

const logout: NextApiHandler = async (req, res) => {
  try {
    await auth0.handleLogout(req, res);
  } catch (err) {
    res.status(err.status | 500).end(err.message);
  }
};

export default logout;

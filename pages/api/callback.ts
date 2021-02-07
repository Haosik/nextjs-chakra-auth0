import { NextApiHandler } from 'next';
import auth0 from '../../lib/auth0';

const callback: NextApiHandler = async (req, res) => {
  try {
    await auth0.handleCallback(req, res, {
      redirectTo: '/secret',
    });
  } catch (err) {
    res.status(err.status | 500).end(err.message);
  }
};

export default callback;

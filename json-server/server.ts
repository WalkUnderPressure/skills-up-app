// Working version "json-server": "^0.17.0"
import jsonServer from 'json-server';

import deleteFieldFrom from '../src/shared/lib/helpers/deleteFieldFrom';
import { UserSchema } from './db/users';
import getDB from './db/__db__';

const DB_DATA = getDB();

const server = jsonServer.create();
const router = jsonServer.router(DB_DATA);

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Small delay for real server behavior imitation
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 2000);
  });
  next();
});

// Sign in endpoint
server.post('/sign-in', (req, res) => {
  try {
    const { username, password } = req.body;

    const { users = [] } = DB_DATA;

    const userFromBd = users.find(
      (user: UserSchema) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      // remove user password before send to client
      deleteFieldFrom(userFromBd, 'password');

      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
});

// Check user authorization
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Authorization error!' });
  }

  next();
});

server.use(router);

// start dev server
const PORT = 7000;
server.listen(PORT, () => {
  console.log(`Server is running\nLocal: http://localhost:${PORT}`);
});

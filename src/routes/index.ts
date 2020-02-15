import { Feed } from './feed';
import * as express from 'express';

const route = express.Router();

route.use(
  Feed,
);

export { route };
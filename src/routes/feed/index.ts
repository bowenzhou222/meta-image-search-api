import * as express from 'express';
import { get } from './controller';

const Feed = express();

Feed.get('/feeds', get)

export { Feed };

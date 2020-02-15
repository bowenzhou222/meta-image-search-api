import * as express from 'express';
import { appMiddlewares } from './middleware';
import { route } from './routes';
import { start } from './utils/start';

export const app = express();

app.use(appMiddlewares);
app.get('/health', (req, res) => {
  return res.send('app is running');
})

app.use(route);

start(app);

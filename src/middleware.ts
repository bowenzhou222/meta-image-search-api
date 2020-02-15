import * as cors from 'cors';
import * as helmet from 'helmet';

export const appMiddlewares: Array<any> = [
    cors(),
    helmet(),
];

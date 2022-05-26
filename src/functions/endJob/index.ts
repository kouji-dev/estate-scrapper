import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  name: 'endJob',
  events: [
    {
      http: {
        method: 'post',
        path: 'endJob',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};

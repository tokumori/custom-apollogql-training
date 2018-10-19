import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import db from '../models'
import {schema} from './schema'

let app = express();
app.use('*', cors());
app.use('/graphql', bodyParser.json(), graphqlExpress( { schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

const PORT = 4000;

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}.`)
    })
  })
  .catch((err) => {
    console.log(err);
    throw TypeError(err);
  })

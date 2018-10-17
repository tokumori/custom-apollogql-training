import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import db from '../models'

let app = express();
app.use('*', cors());

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

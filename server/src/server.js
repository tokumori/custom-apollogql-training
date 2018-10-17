import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

let app = express();
app.use('*', cors());

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}.`)
})
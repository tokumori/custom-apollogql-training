import { makeExecutableSchema } from 'graphql-tools';
import { Person } from '../models';

const typeDefs = `
  type Person {
    id: ID!
    firstName: String
    middleName: String
    lastName: String
  }
   type Query {
    person(id: ID!, firstName: String, middleName: String, lastName: String): Person
  }
`

const resolvers = {
  Query: {
    person: (_, args) => {
      return Person.find({where: args})
    }
  }
}
const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema };
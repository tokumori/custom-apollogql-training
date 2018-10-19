import { makeExecutableSchema } from 'graphql-tools';
import { Person } from '../models';

Person.findAll().then((person) => console.log(person))

const schema = {};
export { schema };
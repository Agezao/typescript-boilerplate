import { gql } from 'apollo-server-express';
import fs from 'fs';
import path from 'path';

const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8").toString();

export default gql(typeDefs);

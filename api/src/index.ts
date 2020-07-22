import MongooseContext from './infrastructure/mongoose.context';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import App from './app';
import Routes from './routes';

const start = async () => {
  await MongooseContext.connect();

  const app = new App({});

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  apolloServer.applyMiddleware({ app: app.app })

  app.app.use(Routes);

  app.listen();
};

start();

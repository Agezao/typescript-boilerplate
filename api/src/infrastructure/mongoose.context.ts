import mongoose from 'mongoose';
import config from './config';

export default class MongooseContext {
  public static mongoose: mongoose.Mongoose;

  public static async connect(): Promise<mongoose.Mongoose> {
    const uri = `mongodb://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.database}?authSource=admin&w=1`;

    this.mongoose = await mongoose.connect(
      uri,
      {
        'useNewUrlParser': true,
        'useFindAndModify': false,
        'useCreateIndex': true,
        'useUnifiedTopology': true ,
      },
    );

    return this.mongoose;
  }
};

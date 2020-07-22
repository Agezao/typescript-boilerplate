import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User.model';

export interface ITweet extends Document {
  message: string;
  createdAt: Date;
  user: IUser['_id'];
}

const TweetSchema: Schema = new Schema({
  message: { type: String, required: true },
  createdAt: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<ITweet>('Tweet', TweetSchema);

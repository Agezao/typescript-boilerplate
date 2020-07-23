/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any */
import User, { IUser } from '../models/User.model';

export default {
  queries: {
    users: async (): Promise<IUser[]> => User.find(),
    user: async (_: any, { id = null }: any): Promise<IUser> => User.findById(id),
  },
  mutations: {
    createUser: async (_: any, user: IUser): Promise<IUser['_id']> => {
      const createdUser = new User(user);
      await createdUser.save();

      return createdUser._id;
    },
  }
};

import mongoose from 'mongoose';
import { envVariables } from './config';
import colors from 'colors';

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(envVariables.MONGO_URI as string);
    console.log(
      `MongoDB connected: ${connection.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(colors.red.underline(`${error}`));
  }
};

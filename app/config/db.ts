import mongoose, { ConnectOptions } from 'mongoose';

let connected = false;

const connectDb = async () => {
  mongoose.set('strictQuery', true);

  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;

    console.log('Mongo connection successful');
  } catch (error) {
    throw new Error('Error connecting to the mongoDb database');
  }
};

export default connectDb;

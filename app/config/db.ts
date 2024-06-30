import { set, connect, connections } from 'mongoose';

let connected = false;

const connectDb = async () => {
  set('strictQuery', true);

  if (connections[0].readyState) return;

  try {
    await connect(process.env.MONGODB_URI);
    connected = true;

    console.log('Mongo connection successful');
  } catch (error) {
    throw new Error('Error connecting to the mongoDb database');
  }
};

export default connectDb;

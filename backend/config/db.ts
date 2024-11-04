import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/yourdbname';
    await mongoose.connect(uri, {});
    console.log('MongoDB Connected');
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Unexpected error:', error);
    }
    process.exit(1);
  }
};

export default connectDB;

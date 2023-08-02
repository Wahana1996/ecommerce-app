import mongoose from "mongoose";
import colors from "colors";

//import to server.js
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To Mongodb ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error In Mongodb ${error}`.bgRed.white);
  }
};
export default connectDB;

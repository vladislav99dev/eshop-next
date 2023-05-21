import mongoose from "mongoose";

const connectDB = async () => mongoose.connect(process.env.DB_CONNECTION!);


export default connectDB
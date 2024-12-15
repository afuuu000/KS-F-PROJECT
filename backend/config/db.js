import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://afanshehzad0:3061989555@cluster0.qz4xd.mongodb.net/KS-F-PROJECT").then(()=>console.log("DB Connected"));
};

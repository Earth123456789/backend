// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// export const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/hunsa-salon");
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection failed", error);
//     process.exit(1);
//   }
// };

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { config } from 'dotenv';

config();

// ตั้งค่า DynamoDB Client
const dynamoClient = new DynamoDBClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.aws_access_key_id!,
    secretAccessKey: process.env.aws_secret_access_key!,
    sessionToken: process.env.aws_session_token 
  },
});

// สร้าง Document Client
const ddbDocClient = DynamoDBDocumentClient.from(dynamoClient);

export { ddbDocClient };

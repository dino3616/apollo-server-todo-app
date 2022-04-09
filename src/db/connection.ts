import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const DATABASE_URL = process.env.MONGO_URL;
if (typeof DATABASE_URL === 'undefined') {
    console.error('Error: environment variable "MONGO_URL" is not set.');
    process.exit(1);
}

const connectDB = async () => {
    mongoose
        .connect(DATABASE_URL)
        .then((connection) => {
            console.log(`MongoDB Connected ${connection.connection.host} ✨`);
        })
        .catch((error) => {
            console.error(
                `Error: DB connection error.\ndetail...${error.message}`
            );
            process.exit(1);
        });
};

export default connectDB;

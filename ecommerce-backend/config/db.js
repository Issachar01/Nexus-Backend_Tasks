import dotenv from "dotenv";
import mongoose, {mongo} from "mongoose";

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected Successfully")
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

export default connectDB
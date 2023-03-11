import mongoose from "mongoose";

let cached: { conn: any; promise: any } = { conn: null, promise: null };

console.log({ env: process.env });

if (!process.env.MONGODB_URL) {
  throw new Error("MONGO URL is not defined in enviroment. Define one in url");
}

async function connectMongoDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("creating the connection again");

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };
    const mongoUrl = createMongodbUrl();
    console.log({ mongoUrl });
    cached.promise = mongoose.connect(mongoUrl, options).then((conn) => conn);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

function createMongodbUrl(): string {
  if (process.env.NODE_ENV === "development") {
    return process.env.MONGODB_URL as string;
  } else {
    const mongourl = (process.env.MONGODB_URL as string)
      .replace(/<DB_USERNAME>/, process.env.DATABASE_USERNAME as string)
      .replace(/<DB_PASSWORD>/, process.env.DATABASE_PASSWORD as string)
      .replace(/<DB_NAME>/, process.env.DATABASE_NAME as string);

    return mongourl;
  }
}

export default connectMongoDB;

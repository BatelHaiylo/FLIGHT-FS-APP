import mongoose from "mongoose";

const DBConnection = process.env.LOCAL_CONNECTION_STRING;

mongoose
  .connect(DBConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Server running on port: ${process.env.PORT}`))
  .catch((error) => console.log(error.message));

export const db = mongoose.connection;

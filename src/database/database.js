import mongoose from "mongoose";

const database = mongoose
  .connect(process.env.DATABASE_USER)
  .then(() => console.log("Banco de dados iniciado"))
  .catch((err) => console.log(err));

export { database };

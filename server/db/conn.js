const mongoose = require("mongoose");
const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(() => console.log("db successfully connected "))
  .catch((err) => console.log(err));

module.exprots = mongoose;

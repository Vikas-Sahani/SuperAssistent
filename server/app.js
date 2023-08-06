require("dotenv").config();
const express = require("express");
const router = require("./routes/router");
require("./db/conn");
const cors = require("cors");

const app = express();

const allowedOrigins = ["http://localhost:3000", `http://localhost:5000`];
app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

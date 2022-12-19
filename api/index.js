const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const dbConfig = require('./database')
app.use(cors());


if (process.env.NODE_ENV == "production") {
  dbConfig.connection.socketPath = process.env.GAE_DB_ADDRESS;
} else {
  dbConfig.connection.host = "127.0.0.1";
}

const knex = require("knex")(dbConfig);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/gestionnaire_absence", async (req, res) => {
  const result = await knex.select().table("users");
  console.log(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
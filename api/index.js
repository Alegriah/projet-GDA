const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());

let dbConfig = {
  /* Notice! These are here for demo purposes. DO NOT COMMIT YOUR INFO to version control*/
  client: "mysql",
  connection: {
    user: "root",
    password: "",
    database: "gestionnaire_absence",
  },
};

const knex = require("knex")(dbConfig);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/db-demo", async (req, res) => {
  const result = await knex.select().table("absences");
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
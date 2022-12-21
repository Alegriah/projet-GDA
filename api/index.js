const express = require("express");
const mysql = require("mysql")

const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json())

const dbConfig = {

  client: "mysql",
  connection: {
    user: "root",
    password: "",
    database: "gestionnaire_absence",
    
  },
};

if (process.env.NODE_ENV == "production") {
  dbConfig.connection.socketPath = process.env.GAE_DB_ADDRESS;
} else {
  dbConfig.connection.host = "127.0.0.1";
}

const knex = require("knex")(dbConfig);

app.get("/tableauRTT", async (req, res) => {
  const result = await knex.select().table("absencegenerale");
  // console.log(result);
  res.send(result)
});

app.post("/tableauRTTpost", async (req, res)=>{
  const result = await knex('absencegenerale').insert({jour: req.body})
  res.send(result)
})

app.post("/tableauRTTdelete", async (req, res)=>{
  const result = await knex.select()
  .table("absencegenerale")
  .del({id: req.id})
  .table("absencegenerale")
  res.send(result)
})

app.post("/tableauRTTedit", async (req, res)=>{
  const result = await knex.alter({id: req.body}).table("absencegenerale").constraint('absencegenerale').foreign('IdAbsenceGenerale').references('absences.IdAbsence')
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
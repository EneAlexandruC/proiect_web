import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"club_sportiv"
})

app.get("/get-anunturi", (req,res) => {
    const query = "SELECT * FROM anunt"
    db.query(query,(err, data) =>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/post-anunturi", (req,res) => {
    const query = "INSERT INTO anunt (`Title`, `Author`, `Description`, `Url`) VALUES (?)"
    const values = [req.body.Title, req.body.Author, req.body.Description, req.body.Url]

    db.query(query, [values], (err,data) => {
        if (err) return res.json(err)
        return res.json("Anunt Creat!")

    })
})

app.delete("/delete-anunturi:id", (req, res) =>{
    const anuntID = req.params.id;
    const query = "DELETE FROM anunt WHERE anunt.ID = ?"

    db.query(query, [anuntID], (err,data) => {
        if (err) return res.json(err)
        return res.json("Anunt distrus cu succes!")
    })
})

app.put("/update-anunturi:id", (req, res) =>{
    const anuntID = req.params.id;
    const query = "UPDATE anunt SET `Title` = ?, `Author` = ?, `Description` = ?, `Url` = ? WHERE anunt.ID = ?"
    const values = [req.body.Title, req.body.Author, req.body.Description, req.body.Url]

    db.query(query, [...values,anuntID], (err,data) => {
        if (err) return res.json(err)
        return res.json("Anunt actualizat cu succes!")
    })
})

app.listen(8800, () =>{
    console.log("Connected to backend!")
}) 
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

// ENDPOINT-URI PENTRU ANUNTURI

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

// ENDPOINT-URI PENTRU ECHIPE/MEMBRII ECHIPELOR

app.get("/get-echipe", (req,res) => {
    const query = "SELECT ID, Nume, DATE_FORMAT(DataInscriere, '%Y-%m-%d') AS DataInscriere FROM echipa"
    db.query(query,(err, data) =>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/get-membri:id", (req, res) => {
    const echipaID = req.params.id
    const query = `
    SELECT membru_echipa.ID, CONCAT_WS(' ', membru_echipa.Nume, membru_echipa.Prenume) AS Nume, membru_echipa.CNP
    FROM membru_echipa 
    INNER JOIN echipa 
    ON membru_echipa.ID_echipa = echipa.ID
    WHERE membru_echipa.ID_echipa = ?;`

    db.query(query,[echipaID],(err, data) =>{
        if (err) return res.json(err)
        console.log(data)
        return res.json(data)
    })
})

app.listen(8800, () =>{
    console.log("Connected to backend!")
}) 
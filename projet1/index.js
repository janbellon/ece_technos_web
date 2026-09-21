import express from "express"

const app = express();
app.use(express.json())
app.use(express.text())

app.get("/message", (_, res) => {
    res.status(200).json({"message": "Hello World !"});
})

app.get("/id/:id", (req, res) => {
    res.status(200).json({"id": req.params.id});
})

app.listen(3000, () => console.log("Listening on http://0.0.0.0:3000"));

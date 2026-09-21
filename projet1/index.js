import express from "express"

const cors = (_,res,next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', '*')
    res.set('Access-Control-Allow-Headers', 'Content-Type, x-api-key')
    next()
}

const app = express();
app.use(cors)
app.use(express.json())
app.use(express.text())

app.get("/message", (_, res) => {
    const messages = [
        "J'aime les patates",
        "XPTDR",
        "Tomate cerise"
    ]
    res.status(200).json({"message": messages[Math.floor(Math.random() * messages.length)]});
})

app.get("/id/:id", (req, res) => {
    res.status(200).json({"id": req.params.id});
})

app.listen(3000, () => console.log("Listening on http://0.0.0.0:3000"));

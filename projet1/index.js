import express from "express"

const app = express();
app.use(express.json())

app.get("/", (_, res) => {
    res.status(404).json({"error": "Not found"});
}) 

app.listen(3000, () => console.log("Listening on http://0.0.0.0:3000"))
import express from "express"

const app = express();
app.use(express.json())
app.use(express.text())

app.get("/myip", (req, res) => {
    res.status(200).json({"ip": req.ip});
    console.log('%s -> /myip', req.ip)
})

app.get("/id/:id", (req, res) => {
    res.status(200).json({"id": req.params.id});
    console.log('%s -> /%s', req.ip, req.params.id)
})

app.get("/fetch", async (req, res) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await response.json()
    res.status(200).json(data)
    console.log('%s -> /fetch', req.ip)
})

app.listen(3000, () => console.log("Listening on http://0.0.0.0:3000"));
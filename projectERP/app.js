import express from 'express';
import mainRouter from "./routes/index.router.js"

const app = express();

app.use(express.json());
app.use("/api", mainRouter)
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.render("index")
})

export default app
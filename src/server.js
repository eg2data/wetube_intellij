// 1. create app
import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

const logger = morgan("dev");

// 2. configure app
app.use(logger);
app.get("/", (req, res, next) => {
    return res.send("<h1>test</h1>");
});
app.get("/login", (req, res, next) => {
    return res.send({message: "login test"});
});
app.get("/privatespace", (req, res) => {
    return res.send("<h1>Welcome</h1>")
})

// 3. open app to the outside
app.listen(PORT, ()=>console.log(`Server is listening on port http://localhost:${PORT}`));


test_






















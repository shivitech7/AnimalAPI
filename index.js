import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import "./Database/connection.js";
import Routes from "./Routes/animals.js";

//creating express app
const app = express();
app.use(cors());

const PORT = 5000;
const rootDir = path.resolve();
// console.log(rootDir);
const staticPath = path.join(rootDir, "Styles");

app.use(bodyParser.json());
app.use(express.static(staticPath));

// all routes
app.get("/", (req,res)=>{
    res.sendFile( path.join(rootDir,"index.html"));
});

app.use("/animals", Routes);

app.listen(PORT, ()=> console.log(`server is running at http://localhost:${PORT}`));
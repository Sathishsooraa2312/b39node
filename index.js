// / const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import filmsRouter from "./routes/films.routes.js"
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT =process.env.PORT;

    // const MONGO_URL = "mongodb://127.0.0.1";
    const MONGO_URL=process.env.MONGO_URL;
   
const client=new MongoClient(MONGO_URL) //phone dial
// top-level await
 await client.connect(); // call button
 console.log("Mongodb is connected");

// express.json() , middle ware,inbuild json // convert data to json
 app.use(express.json());

app.get("/", function (request, response) {
  response.send("welcome to karikalan magic show!!!");
});

app.use('/films',filmsRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client};
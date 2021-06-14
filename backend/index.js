const express = require("express");
const morgan = require("morgan");

const { Mongoose } = require("./database/database");

const app = express();
app.set("port", process.env.PORT || 4501);

app.use(morgan("tiny"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//routes


//listen
app.listen(app.get("port"), "127.0.0.1", ()=>{
    console.log(`Server ${app.get("port")}`);
})

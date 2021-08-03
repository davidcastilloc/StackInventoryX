const express = require("express");
const morgan = require("morgan");

const { mongoose } = require("./database/database");

const app = express();
app.set("port", process.env.PORT || 4501);

app.use(morgan("tiny"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//routes
app.use(require("./routers/Company"));
app.use(require("./routers/Employee"));
app.use(require("./routers/Bill"));

//listen
app.listen(app.get("port"), () => {
  console.log(`Server ${app.get("port")}`);
});

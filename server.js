const express = require("express");
const bodyParser = require("body-parser");

// Models
const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

// Routes
const todos = require("./routes/todos");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/todos", todos);

app.listen(3000);

const express = require("express");
const router = express.Router();

const { Todo } = require("../models/todo");

router.post("/", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

module.exports = router;

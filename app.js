const express = require("express");

const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const todayDate = new Date();
  const dateAfterDays = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    ),
    100
  );

  response.send(
    `${dateAfterDays.getDate()}/${
      dateAfterDays.getMonth() + 1
    }/${dateAfterDays.getFullYear()}`
  );
});
module.exports = app;

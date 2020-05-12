// const express = require("express");
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

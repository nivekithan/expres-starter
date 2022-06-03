import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!, Its 3000");
});

const port = 3000;

app.listen(port, () => {
  console.log(`App is running on Port : ${port}`);
});

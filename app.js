const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/home", (req, res) => {
  res.send("idan ");
});
app.post("/post", (req, res) => {
  const { userName} = req.body;
  res.send(userName);

  res.send(`Hello World!${userName}`);
});

app.delete("/delete", (req, res) => {
  res.send("Hello World!");
});

app.put("/put", (req, res) => {
  res.send("Hello World!");
});

app.patch("/patch", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

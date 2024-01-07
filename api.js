const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Get API" });
});

app.get("/:id", (req, res) => {
  res.status(200).json({ message: "Get API BY ID" });
});

app.post("/", (req, res) => {
  res.status(201).json({ message: "Post the contact" });
});

app.put("/:id", (req, res) => {
  res.status(201).json({ message: "Update the contact" });
});

app.delete("/:id", (req, res) => {
  res.status(201).json({ message: "Delete the contact" });
});

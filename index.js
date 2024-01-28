const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/check", (req, res) => {
  res.json({
    data: [
      { name: "Alice", age: 28 },
      { name: "Bob", age: 34 },
      { name: "Charlie", age: 22 },
      { name: "Diana", age: 45 },
      { name: "Eric", age: 30 },
      { name: "Fiona", age: 19 },
      { name: "George", age: 37 },
      { name: "Helen", age: 25 },
      { name: "Ivan", age: 41 },
      { name: "Jasmine", age: 29 },
    ],
  });
});
app.listen(PORT, () => {
  console.log("server running on ", PORT);
});

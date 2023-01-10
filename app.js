const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`berhasil running di ${PORT}`);
});

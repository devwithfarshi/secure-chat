import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => [
  res.send({
    message: "Api is runing...",
    success: true,
  }),
]);

app.listen(port, () => {
  console.log(`your server runing on http://127.0.0.1:${port}`);
});

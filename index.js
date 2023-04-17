const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({msg: "Hello World"});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

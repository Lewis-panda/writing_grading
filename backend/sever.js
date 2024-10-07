const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/api/process', (req, res) => {
  const { text } = req.body;
  const result = `你輸入的文字是: ${text}`;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`後端伺服器運行在 http://localhost:${port}`);
});
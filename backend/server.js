const express = require('express');
const cors = require('cors');  // 啟用 CORS
const axios = require('axios'); // 引入 axios 用來處理請求
const app = express();
const port = 5001;

app.use(cors());  // 啟用 CORS，允許跨域請求
app.use(express.json());  // 解析 JSON 格式的請求體

// 處理前端發送的 POST 請求，並轉發給模型服務
app.post('/api/process', async (req, res) => {
  const { text } = req.body; // 從請求體中獲取文字
  try {
    // 使用 axios 發送請求給模型服務
    const modelResponse = await axios.post('http://localhost:8000/api/predict', { text });

    // 將模型服務的響應發送回給前端
    res.json({ generated_text: modelResponse.data.generated_text });
  } catch (error) {
    console.error('Error calling model service:', error.message);

    // 處理錯誤情況，返回 500 錯誤
    res.status(500).send('Error calling model service');
  }
});

app.listen(port, () => {
  console.log(`後端伺服器運行在 http://localhost:${port}`);
});

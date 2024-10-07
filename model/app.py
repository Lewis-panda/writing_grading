from flask import Flask, request, jsonify
from openai import OpenAI  # 引入 OpenAI 客戶端

# 初始化 Flask 應用
app = Flask(__name__)

# 初始化 OpenAI 客戶端（使用環境變數中的 API 密鑰）
client = OpenAI()

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()  # 從請求中獲取 JSON 數據
    text = data['text']  # 獲取用戶輸入的文本

    # 使用 OpenAI API 生成回應
    completion = client.chat.completions.create(
        model="gpt-4o-mini",  # 使用 gpt-4 模型
        # model="gpt-4",  # 使用 gpt-4 模型
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": text}
        ]
    )

    # 提取生成的文本
    generated_text = completion.choices[0].message.content

    print(generated_text)
    # 返回 JSON 響應
    return jsonify({'generated_text': generated_text})

if __name__ == '__main__':
    # 啟動 Flask 應用
    app.run(host='0.0.0.0', port=8000)

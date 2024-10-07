from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)
model = pipeline('text-generation', model='gpt2')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data['text']
    result = model(text, max_length=50)
    return jsonify(result[0]['generated_text'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)

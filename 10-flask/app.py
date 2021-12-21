from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/', methods=["GET"])
def index():
  return {"greeting" : "hello world"}

@app.route('/get', methods=['GET'])
def get_exam():
    name = request.args.get('name')
    age  = request.args.get('age')
    return {
        'name': name,
        'age': age
    }

@app.route('/post', methods=["POST"])
def post_exam():
    data = json.loads(request.data)
    name = data['name']
    age = data['age']
    return {
        'name': name,
        'age': age,
    }

if __name__=="__main__":
  app.run(debug=True, port=3001)
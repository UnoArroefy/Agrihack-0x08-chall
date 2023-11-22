from flask import Flask, request, render_template, redirect, url_for, render_template_string, jsonify

app = Flask(__name__)
if __name__ == '__main__':
    app.run()

@app.route('/flag', methods=['GET'])
def index():
    return "agrihack{d6723612-b6fa-4f7f-8198-c488765dcbcd}"
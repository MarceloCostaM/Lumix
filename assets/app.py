from flask import Flask, render_template, request, make_response, url_for, redirect, jsonify, session
import os


app = Flask(__name__)
 

@app.route('/')
@app.route('/home')
def index():
    return render_template('home/home.html')

@app.route('/jogos')
def jogos():
    return render_template('jogos/jogos.html')

@app.route('/register')
def register():
    return render_template('register/register.html')

@app.route('/login')
def login():
    return render_template('login/login.html')

@app.route('/wallet')
def wallet():
    return render_template('wallet/carteira.html')

if __name__ == '__main__':
    app.run(debug=True)

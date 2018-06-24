from flask import Flask, jsonify, g, session, redirect, url_for, escape, request
from helpers import query_db, login_required

import os


app = Flask(__name__)
app.secret_key = os.urandom(24)


@app.route('/')
def hello():
    session['userId'] = 'Nakan'
    # return jsonify({'text':'Hello World!'})
    
    users = query_db("SELECT * from 'users'")
    return jsonify(users)

@app.route('/login')
def login():
    if 'userId' in session:
        userId = session['userId']
        return 'Hello' + userId
    
    return 'You are not logged in'

@app.route('/logout')
@login_required
def logout():
   # remove the userId from the session if it is there
   session.pop('userId', None)
   return redirect(url_for('login'))


if __name__ == '__main__':
    app.run(debug=True)
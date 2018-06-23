from flask import Flask, jsonify, g
import sqlite3

app = Flask(__name__)

# db helpers
DATABASE = './test.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv
# end db helpers

@app.route('/')
def hello():
    # return jsonify({'text':'Hello World!'})
    users = query_db("SELECT * from 'users'")
    return jsonify(users)
from flask import Flask, g, redirect, render_template, request, session, abort
from functools import wraps

import sqlite3

app = Flask(__name__)

# db helpers
DATABASE = './test.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)

    def make_dicts(cursor, row):
        return dict((cursor.description[idx][0], value)
                    for idx, value in enumerate(row))

    db.row_factory = make_dicts
    return db



@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False, comit=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()

    if comit:
        get_db().commit()

    return (rv[0] if rv else None) if one else rv
# end db helpers

def login_required(f):
    """
    Decorate routes to require login.

    http://flask.pocoo.org/docs/0.12/patterns/viewdecorators/
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("user_id") is None:
            abort(401, 'Unauthorized')
        return f(*args, **kwargs)
    return decorated_function
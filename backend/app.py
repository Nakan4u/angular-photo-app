from flask import Flask, jsonify, g, session, redirect, url_for, escape, request, Response, flash, abort
from werkzeug.debug import DebuggedApplication
from werkzeug.exceptions import default_exceptions
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import query_db, login_required, apology

import os


app = Flask(__name__)
app.secret_key = os.urandom(24)
app.debug = True


@app.errorhandler(400)
def errorhandler(error):
    response = jsonify({'message': error.description})
    return response, 400

@app.route('/')
def hello():
    return 'Hello World!'

@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.values.get("username"):
            abort(400, 'must provide username')

        # Ensure password was submitted
        elif not request.values.get("password"):
            abort(400, 'must provide password')

        # Query database for username
        row = query_db("SELECT * FROM users WHERE name = ?", [request.values.get("username")], one=True)

        # Ensure username exists and password is correct
        if not row or not check_password_hash(row["hash"], request.values.get("password")):
            abort(400, 'invalid username and/or password')

        # Remember which user has logged in
        session["user_id"] = row["id"]

        # Redirect user to home page
        # return redirect("/")
        return "Login success!"

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        # return redirect(url_for('login'))
        return "login page"

@app.route('/logout')
def logout():
   # remove the user_id from the session if it is there
   session.pop('user_id', None)
   # return redirect(url_for('login'))
   return "logout success!"

@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.values.get("username"):
            # abort(400, 'must provide username')
            abort(400, 'must provide username')

        # Ensure password was submitted
        elif not request.values.get("password"):
            abort(400, 'must provide password')

        # Ensure confirm password was submitted
        elif not request.values.get("confirmation"):
            abort(400, 'must provide confirm password')

        # Ensure that password matched with confirm password
        elif not request.values.get("password") == request.values.get("confirmation"):
            abort(400, 'passwords not matched')

        # Encrypt password
        password = request.values.get("password")
        hash = generate_password_hash(password, 'sha256', 8)

        # Add new user to the DB if it not exist
        result = query_db("SELECT name FROM users WHERE name = ?", [request.values.get("username")], one=True)

        if result:
            abort(400, 'user with this name already exist')
            
        else:
            result = query_db("INSERT INTO users (name, hash) VALUES(?, ?)", [request.values.get("username"), hash], comit=True)
            flash("User created!")
            return "User created!"

    else:
        # return render_template("register.html")
        return 'register page'

@app.route('/dashboard')
@login_required
def dashboard():
    return 'user dashboard'


if __name__ == '__main__':
    app.run(debug=True)
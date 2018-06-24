from flask import Flask, jsonify, g, session, redirect, url_for, escape, request, Response, flash, abort
from werkzeug.exceptions import default_exceptions
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import query_db, login_required, apology

import os


app = Flask(__name__)
app.secret_key = os.urandom(24)

# @app.errorhandler(400)
# def errorhandler(error):
#     response = jsonify({'message': error.description})

@app.route('/')
def hello():
    session['user_id'] = 'Nakan'
    # return jsonify({'text':'Hello World!'})
    
    # users = query_db("SELECT * from 'users'")
    users = query_db("SELECT * FROM users WHERE name = ?", ['admin'])
    return jsonify(users)

# TODO: add sesion when we login with one of existing user;
# 2) add hash generator for password
@app.route('/login')
def login():
    if 'user_id' in session:
        user_id = session['user_id']
        return 'Hello' + user_id
    
    return 'You are not logged in'

@app.route("/login2", methods=["GET", "POST"])
def login2():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = query_db("SELECT * FROM users WHERE name = ?", [request.form.get("username")])

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return redirect(url_for('login'))

@app.route('/logout')
def logout():
   # remove the user_id from the session if it is there
   session.pop('user_id', None)
   return redirect(url_for('login'))

@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            # return apology("must provide username", 400)
            abort(400)
            abort(Response('must provide username'))
            # abort(400, 'must provide username')

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 400)

        # Ensure confirm password was submitted
        elif not request.form.get("confirmation"):
            return apology("must provide confirm password", 400)

        # Ensure that password matched with confirm password
        elif not request.form.get("password") == request.form.get("confirmation"):
            return apology("passwords not matched", 400)

        # Encrypt password
        password = request.form.get("password")
        hash = generate_password_hash(password, 'sha256', 8)

        # Add new user to the DB if it not exist
        result = query_db("SELECT name FROM users WHERE name = ?", [request.form.get("username")], one=True)

        if result:
            return apology("user with this name already exist", 400)
        else:
            result = query_db("INSERT INTO users (name, hash) VALUES(?, ?)", [request.form.get("username"), hash])

            flash("User created!")
            # return redirect("/")
            return "User created!"

    else:
        # return render_template("register.html")
        return 'register page'

@app.route('/dashboard')
@login_required
def test():
    return 'user dashboard'

if __name__ == '__main__':
    app.run(debug=True)
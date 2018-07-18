from flask import Flask, jsonify, g, session, redirect, url_for, escape, request, Response, flash, abort
from flask_cors import CORS, cross_origin
from werkzeug.debug import DebuggedApplication
from werkzeug.exceptions import default_exceptions
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import query_db, login_required

import os


app = Flask(__name__)
app.secret_key = os.urandom(24)
app.debug = True
CORS(app, support_credentials=True)

api_url_prefix = '/api'

@app.errorhandler(400)
def errorhandler(error):
    response = jsonify({'message': error.description})
    return response, 400

@app.route(api_url_prefix + '/')
def hello():
    return 'Hello World!'

@app.route(api_url_prefix + "/login", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def login():
    """Log user in"""
    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.json["username"]:
            abort(400, 'must provide username')

        # Ensure password was submitted
        elif not request.json["password"]:
            abort(400, 'must provide password')

        # Query database for username
        result = query_db("SELECT * FROM users WHERE name = ?", [request.json["username"]], one=True)

        # Ensure username exists and password is correct
        if not result or not check_password_hash(result["hash"], request.json["password"]):
            abort(400, 'invalid username and/or password')
            status = False

        # Remember which user has logged in
        session["user_id"] = result["id"]
        status = True

        # Redirect user to home page
        # return redirect("/")
        return jsonify({'result': status, 'displayName': result["name"]})

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        # return redirect(url_for('login'))
        return "login page"

@app.route(api_url_prefix + '/logout')
def logout():
   # remove the user_id from the session if it is there
   session.pop('user_id', None)
   # return redirect(url_for('login'))
   return jsonify({'result': 'success'})

@app.route(api_url_prefix + "/register", methods=["GET", "POST"])
def register():
    """Register user"""

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.json["username"]:
            # abort(400, 'must provide username')
            abort(400, 'must provide username')

        # Ensure password was submitted
        elif not request.json["password"]:
            abort(400, 'must provide password')

        # Ensure confirm password was submitted
        elif not request.json["confirmation"]:
            abort(400, 'must provide confirm password')

        # Ensure that password matched with confirm password
        elif not request.json["password"] == request.json["confirmation"]:
            abort(400, 'passwords not matched')

        # Encrypt password
        password = request.json["password"]
        hash = generate_password_hash(password, 'sha256', 8)

        # Add new user to the DB if it not exist
        result = query_db("SELECT name FROM users WHERE name = ?", [request.json["username"]], one=True)

        if result:
            abort(400, 'user with this name already exist')
            status = 'user with this name already exist'
            
        else:
            result = query_db("INSERT INTO users (name, hash) VALUES(?, ?)", [request.json["username"], hash], comit=True)
            flash("User created!")
            # return "User created!"
            status = 'success'
            
        return jsonify({'result': status})

    else:
        # return render_template("register.html")
        return 'register page'

@app.route(api_url_prefix + '/favorites', methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
@login_required
def favorites():
    if request.method == "GET":
        # return colection of favorites photos
        result = query_db("SELECT * FROM photos WHERE userId = ?", [session["user_id"]])

        if not len(result):
            result = [] # no photos yet
        
        return jsonify(result)

    if request.method == "POST":
        # insert photo to the colection of favorites photos
        photo = {
            'id': request.json["id"],
            'pageURL': request.json["pageURL"],
            'previewURL': request.json["previewURL"],
            'previewHeight': request.json["previewHeight"],
            'previewWidth': request.json["previewWidth"],
            'tags': request.json["tags"]        
        }

        if not photo:
            abort(400, 'no favorite provided')
        
        result = query_db("INSERT INTO photos (photoId, userId, pageURL, previewURL, previewHeight, previewWidth, tags) VALUES (?, ?, ?, ?, ?, ?, ?)", 
            [photo['id'], session["user_id"], photo['pageURL'], photo['previewURL'], photo['previewHeight'], photo['previewWidth'], photo['tags']], comit=True)

        return 'photo added'

@app.route(api_url_prefix + '/favorites/delete', methods=["POST"])
@cross_origin(supports_credentials=True)
@login_required
def favoritesDelete():

    if request.method == "POST":
        # delete photo from the colection of favorites photos
        photoId = request.json["photoId"]
        if not photoId:
            abort(400, 'no favorite provided')

        result = query_db("DELETE FROM photos WHERE photoId = ?", [photoId], comit=True)

        return 'photo deleted'

if __name__ == '__main__':
    app.run(debug=True)
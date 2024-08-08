from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from flask_mail import Mail, Message
import random
import string
import os
import secrets

app = Flask(__name__)

# Configure CORS
CORS(app, resources={r"/*": {"origins": "*"}})

# Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = "noddyripper06@gmail.com"
app.config['MAIL_PASSWORD'] ="hvxj rmbt lxgr ccjo"

mail = Mail(app)

# Security and Database configuration
app.config['SECRET_KEY'] = secrets.token_hex(16)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/new'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    registration = db.Column(db.Integer, unique=True, nullable=False, primary_key=True)
    year = db.Column(db.Integer, nullable=False)
    dob = db.Column(db.Date, nullable=False)
    department = db.Column(db.String(150), nullable=False)
    prof_name = db.Column(db.String(150), nullable=False, default=0)
    acknowledgement = db.Column(db.String(700), nullable=False, default=0)
    introduction = db.Column(db.String(700), nullable=False, default=0)

    otp = db.Column(db.Integer, nullable=False, default=0)

class Faculty(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    department = db.Column(db.String(150), nullable=False)
    designation = db.Column(db.String(150), nullable=False)

    otp = db.Column(db.Integer, nullable=False, default=0)

# Generate OTP
def generate_otp():
    return random.randint(1000,9999)

@app.route('/signupclick', methods=['POST'])
def signup():
    data = request.get_json()
    
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    registration = data.get('registration')
    year = data.get('year')
    dob = data.get('dob')
    department = data.get('department')

    if not name or not email or not password:
        return jsonify({'message': 'Name, email, and password are required'}), 400

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    new_user = User(name=name, email=email, password=hashed_password, registration=registration, year=year, dob=dob , department=department )

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'User with this email already exists'}), 409

email = None
@app.route('/loginclick', methods=['POST'])
def login():
    global email
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return jsonify(['Yes'])
    else:
        return jsonify(['No'])

@app.route('/forgotpasswordclick', methods=['POST'])
def forgot_password():
    global email
    data = request.get_json()
    email1 = data.get('email')
    if not email1:
        return jsonify({'message': 'Email is required'}), 400

    user = User.query.filter_by(email=email1).first()
    if user:
        otp = generate_otp()
        user.otp = otp
        db.session.commit()

        # Send OTP via email
        msg = Message('Password Reset OTP', sender=app.config['MAIL_USERNAME'], recipients=[email])
        msg.body = f'Your OTP for password reset is {otp}'
        mail.send(msg)

        return jsonify({'message': 'OTP sent to email', 'otp': otp}), 200
    else:
        return jsonify({'Email not found'})

@app.route('/verificationclick', methods=['POST'])
def verify():
    global email
    data = request.get_json()
    digit1 = data.get('digit1')
    digit2 = data.get('digit2')
    digit3 = data.get('digit3')
    digit4 = data.get('digit4')

    user = User.query.filter_by(email=email).first()
    user_otp = int(f'{digit1}{digit2}{digit3}{digit4}')

    if user_otp == user.otp:
        return "Yes"
    else:
        return "No"
    
@app.route('/resendcode', methods=['POST'])
def resend():
    global email
    otp = generate_otp()
    user = User.query.filter_by(email=email).first()
    user.otp = otp
    db.session.commit()

    # Send OTP via email
    msg = Message('Password Reset OTP', sender=app.config['MAIL_USERNAME'], recipients=[email])
    msg.body = f'Your OTP for password reset is {otp}'
    mail.send(msg)

    return jsonify({'message': 'OTP sent to email', 'otp': otp}), 200

@app.route('/updateclick', methods=['POST'])
def new_pass():
    global email
    data = request.get_json()
    password = data.get('pass')
    password1 = data.get('pass1')
    user = User.query.filter_by(email=email).first()

    if password == password1:
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        user.password = hashed_password
        db.session.commit()

        return jsonify('Yes')
    else:
        return jsonify('No')
    







@app.route('/certificate', methods=['GET'])
def certificate():
    global email
    user = User.query.filter_by(email=email).first()

    if user:
        name = user.name
        reg = user.registration
        name1 = user.prof_name
        return jsonify({'name': f'{name}', 'registration': f'{reg}', 'name1': f'{name1}'})
    else:
        return jsonify({'name': 'no name', 'registration': 'no reg', 'name1': f'no prof name'})

@app.route('/certificateclick', methods=['POST'])
def certificate1():
    global email
    data = request.get_json()
    name1 = data.get('name1')
    user = User.query.filter_by(email=email).first()

    user.prof_name = name1
    db.session.commit()

    return jsonify({'name': f'{name1}'})

@app.route('/acknowledgement', methods=['GET'])
def acknowledgement():
    global email
    user = User.query.filter_by(email=email).first()

    if user:
        ack = user.acknowledgement
        return jsonify({'acknowledgement': f'{ack}'})
    else:
        return jsonify({'acknowledgement': 'no acknowledgement'})

@app.route('/acknowledgementclick', methods=['POST'])
def acknowledgement1():
    global email
    data = request.get_json()
    ack = data.get('acknowledgement')
    user = User.query.filter_by(email=email).first()

    user.acknowledgement = ack
    db.session.commit()

    return jsonify({'name': f'{ack}'})

@app.route('/introduction', methods=['GET'])
def introduction():
    global email
    user = User.query.filter_by(email=email).first()

    if user:
        intro = user.introduction
        return jsonify({'introduction': f'{intro}'})
    else:
        return jsonify({'introduction': 'no introduction'})

@app.route('/introductionclick', methods=['POST'])
def introduction1():
    global email
    data = request.get_json()
    intro = data.get('introduction')
    user = User.query.filter_by(email=email).first()

    user.introduction = intro
    db.session.commit()

    return jsonify({'introduction': f'{intro}'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
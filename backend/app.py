from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from flask_mail import Mail, Message
import random
from datetime import datetime
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
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    registration = db.Column(db.Integer, unique=True, nullable=False, primary_key=True)
    year = db.Column(db.Integer, nullable=False)
    dob = db.Column(db.Date, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.department_id'), nullable=False)
    department = db.Column(db.String(150), nullable=False)
    prof_name = db.Column(db.String(150), nullable=False, default=0)
    acknowledgement = db.Column(db.String(700), nullable=False, default=0)
    introduction = db.Column(db.String(700), nullable=False, default=0)

    otp = db.Column(db.Integer, nullable=False, default=0)
    logbook_field = db.Column(db.String(150), nullable=False, default=0)
    logbook_field1 = db.Column(db.String(150), nullable=False, default=0)

    departmentp = relationship('Department', back_populates='users')
    entries = relationship('StudentEntry', back_populates='user')

class Faculty(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    department = db.Column(db.String(150), nullable=False)
    designation = db.Column(db.String(150), nullable=False)

    otp = db.Column(db.Integer, nullable=False, default=0)

class Department(db.Model):
    __tablename__ = 'departments'
    department_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    department = db.Column(db.String(100), unique=True, nullable=False)

    users = relationship('User', back_populates='departmentp')
    logbook_fields = relationship('LogbookField', back_populates='departmentp')

class LogbookField(db.Model):
    __tablename__ = 'logbook_fields'
    logbook_field_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    serial_number = db.Column(db.Integer, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.department_id'), nullable=False)
    year = db.Column(db.Enum('1st', '2nd', '3rd', name='year_enum'), nullable=False)
    field_name = db.Column(db.String(100), nullable=False)

    departmentp = relationship('Department', back_populates='logbook_fields')
    subfields = relationship('Subfield', back_populates='logbook_field')

class Subfield(db.Model):
    __tablename__ = 'subfields'
    subfield_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    serial_number = db.Column(db.Integer, nullable=False)
    logbook_field_id = db.Column(db.Integer, db.ForeignKey('logbook_fields.logbook_field_id'), nullable=False)
    subfield_name = db.Column(db.String(100), nullable=False)

    logbook_field = relationship('LogbookField', back_populates='subfields')
    input_fields = relationship('InputField', back_populates='subfield')

class InputField(db.Model):
    __tablename__ = 'input_fields'
    input_field_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    subfield_id = db.Column(db.Integer, db.ForeignKey('subfields.subfield_id'), nullable=False)
    input_field_name = db.Column(db.String(100), nullable=False)

    subfield = relationship('Subfield', back_populates='input_fields')
    entries = relationship('StudentEntry', back_populates='input_field')

class StudentEntry(db.Model):
    __tablename__ = 'student_entries'
    entry_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    subfield_id = db.Column(db.Integer, db.ForeignKey('subfields.subfield_id'), nullable=False)
    input_field_id = db.Column(db.Integer, db.ForeignKey('input_fields.input_field_id'), nullable=False)
    input_value = db.Column(db.String(150), nullable=False)
    entry_date = db.Column(db.DateTime, default=db.func.current_timestamp(), nullable=False)

    user = relationship('User', back_populates='entries')
    subfield = relationship('Subfield')
    input_field = relationship('InputField', back_populates='entries')

class MD_pathology_1st_year(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    index_item = db.Column(db.String(150), nullable=False)

class MD_pathology_1st_year_Clinical_Work(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    index_item = db.Column(db.String(150), nullable=False)

# Generate OTP
def generate_otp():
    return random.randint(1000,9999)


def logbook():
    departments = ['Pathology']
    years = ['1st', '2nd', '3rd']

    for d in departments:
        existing_item = Department.query.filter_by(department=d).first()

        if not existing_item:
            item = Department(department=d)
            db.session.add(item)

        if d == 'Pathology':
            for y in years:
                if y == '1st':
                    logbookfields = ['Clinical Work','Procedures Done','District Residency Program','Academic Activities','Group Discussion Presentation / Seminar / Self Directed Learning / Guest Lecture / Grand Round']
                    for l in logbookfields:
                        department = Department.query.filter_by(department=d).first()
                        department_id = department.department_id
                        existing_item1 = LogbookField.query.filter_by(department_id=department_id, year=y, field_name=l).first()

                        if not existing_item1:
                            item = LogbookField(serial_number=logbookfields.index(l)+1, department_id=department_id, year=y, field_name=l)
                            db.session.add(item)

                        if l == 'Clinical Work':
                            subfields = ['History Taking', 'General Physical Examination', 'Emergency']
                        elif l == 'Procedures Done':
                            subfields = ['Placement of IV Cannula', 'Use of IV Infusion Pump', 'Use of Glucometer']
                        elif l == 'Academic Activities':
                            subfields = ['No Display']
                        elif l == 'Group Discussion Presentation / Seminar / Self Directed Learning / Guest Lecture / Grand Round':
                            subfields = ['No Display1']
                        else:
                            subfields = []

                        for i in subfields:
                            logbook_field = LogbookField.query.filter_by(department_id=department_id, year=y, field_name=l).first()
                            logbook_field_id = logbook_field.logbook_field_id
                            
                            existing_item2 = Subfield.query.filter_by(logbook_field_id=logbook_field_id, subfield_name=i).first()

                            if not existing_item2:
                                item1 = Subfield(serial_number=subfields.index(i)+1, logbook_field_id=logbook_field_id, subfield_name=i)
                                db.session.add(item1)

                            if i == 'History Taking':
                                inputfields = ['S.NO.', 'Date', 'UHID_No', 'Diagnosis']
                            elif i == 'General Physical Examination':
                                inputfields = ['S.NO.', 'Date', 'UHID_No','Comment', 'Diagnosis']
                            elif i == 'Emergency':
                                inputfields = ['S.NO.', 'Date', 'UHID_No', 'Diagnosis']
                            elif i == 'Placement of IV Cannula':
                                inputfields = ['S.NO.', 'UHID_No', 'Procedure_Level', 'Diagnosis']
                            elif i == 'No Display':
                                inputfields = ['S.NO.', 'Topic', 'Journal_details', 'Comment', 'Presentation_date', 'Moderator']
                            elif i == 'No Display1':
                                inputfields = ['S.NO.', 'Topic', 'Program', 'Comment', 'Presentation_date', 'Moderator']                                
                            else:
                                inputfields = []

                            for f in inputfields:
                                subfield_name = Subfield.query.filter_by(logbook_field_id=logbook_field_id, subfield_name=i).first()
                                subfield_id = subfield_name.subfield_id

                                existing_item3 = InputField.query.filter_by(subfield_id=subfield_id, input_field_name=f).first()

                                if not existing_item3:
                                    item2 = InputField(subfield_id=subfield_id, input_field_name=f)
                                    db.session.add(item2)
                    
    db.session.commit()

    items = LogbookField.query.all()
    items1 = Subfield.query.all()
    items2 = InputField.query.all()

    items_list2 = [{"index_item": index_i.input_field_name} for index_i in items2]

    return jsonify(items_list2)

@app.route('/', methods=['GET'])
def fill_tables():
    b = logbook()

    if b:
        return (b)


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

    department1 = Department.query.filter_by(department=department).first()
    department_id = department1.department_id

    # Hash the password
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

    # Check required fields
    if not name or not email or not password:
        return jsonify({'message': 'Name, email, and password are required'}), 400

    # Check if the user already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'User with this email already exists'}), 409

    else:
        # Create a new user instance
        new_user = User( name=name, email=email, password=hashed_password, registration=registration, year=year, dob=dob , department_id=department_id, department=department )

        try:
            # Add and commit the new user to the database
            db.session.add(new_user)
            db.session.commit()
            return jsonify({'message': 'User registered successfully'}), 201

        except Exception as e:
            db.session.rollback()
            return jsonify({'message': 'An error occurred: {}'.format(str(e))}), 500

@app.route('/facultysignupclick', methods=['POST'])
def facultysignup():
    data = request.get_json()
    
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    department = data.get('department')
    designation = data.get('designation')

    if not name or not email or not password:
        return jsonify({'message': 'Name, email, and password are required'}), 400

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    new_user = Faculty(name=name, email=email, password=hashed_password, department=department, designation=designation )

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
    faculty = Faculty.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return jsonify(['student'])
    elif faculty and check_password_hash(faculty.password, password):
        return jsonify(['faculty'])
    else:
        return jsonify(['No'])

email1 = None
@app.route('/forgotpasswordclick', methods=['POST'])
def forgot_password():
    global email1
    data = request.get_json()
    email1 = data.get('email')
    if not email1:
        return jsonify({'message': 'Email is required'}), 400

    user = User.query.filter_by(email=email1).first()
    faculty = Faculty.query.filter_by(email=email1).first()
    if user:
        otp = generate_otp()
        user.otp = otp
        db.session.commit()

        # Send OTP via email
        msg = Message('Password Reset OTP', sender=app.config['MAIL_USERNAME'], recipients=[email1])
        msg.body = f'Your OTP for password reset is {otp}'
        mail.send(msg)

        return jsonify({'message': 'OTP sent to email', 'otp': otp}), 200
    elif faculty:
        otp = generate_otp()
        faculty.otp = otp
        db.session.commit()

        # Send OTP via email
        msg = Message('Password Reset OTP', sender=app.config['MAIL_USERNAME'], recipients=[email1])
        msg.body = f'Your OTP for password reset is {otp}'
        mail.send(msg)

        return jsonify({'message': 'OTP sent to email', 'otp': otp}), 200
    else:
        return jsonify({'Email not found'})

@app.route('/verificationclick', methods=['POST'])
def verify():
    global email1
    data = request.get_json()
    digit1 = data.get('digit1')
    digit2 = data.get('digit2')
    digit3 = data.get('digit3')
    digit4 = data.get('digit4')

    user = User.query.filter_by(email=email1).first()
    faculty = Faculty.query.filter_by(email=email1).first()

    user_otp = int(f'{digit1}{digit2}{digit3}{digit4}')

    if user:
        if user_otp == user.otp:
            return "Yes"
    elif faculty:
        if user_otp == faculty.otp:
            return "Yes"
    else:
        return "No"
    
@app.route('/resendcode', methods=['POST'])
def resend():
    global email1
    otp = generate_otp()
    user = User.query.filter_by(email=email1).first()
    faculty = Faculty.query.filter_by(email=email1).first()
    if user:
        user.otp = otp
        db.session.commit()
    elif faculty:
        faculty.otp = otp
        db.session.commit()

    # Send OTP via email
    msg = Message('Password Reset OTP', sender=app.config['MAIL_USERNAME'], recipients=[email1])
    msg.body = f'Your OTP for password reset is {otp}'
    mail.send(msg)

    return jsonify({'message': 'OTP sent to email', 'otp': otp}), 200

@app.route('/updateclick', methods=['POST'])
def new_pass():
    global email1
    data = request.get_json()
    password = data.get('pass')
    password1 = data.get('pass1')
    user = User.query.filter_by(email=email1).first()
    faculty = Faculty.query.filter_by(email=email1).first()

    if password == password1:
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        if user:
            user.password = hashed_password
            db.session.commit()
            return jsonify('Yes')
        elif faculty:
            faculty.password = hashed_password
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









@app.route('/year-index', methods=['GET'])
def year_index():
    items = LogbookField.query.all()

    items_list = [{'id':index_i.serial_number, "index_item": index_i.field_name} for index_i in items]

    return jsonify(items_list)

@app.route('/year-index1', methods=['GET'])
def year_index1():
    global email
    user = User.query.filter_by(email=email).first()

    logbook_field_id = LogbookField.query.filter_by(department_id=user.department_id, field_name=user.logbook_field).first().logbook_field_id
    items = Subfield.query.filter_by(logbook_field_id=logbook_field_id).all()

    items_list = [{'id':index_i.serial_number, "index_item": index_i.subfield_name, "logbook_field": user.logbook_field} for index_i in items]

    return jsonify(items_list)

@app.route('/add-item', methods=['POST'])
def add_item():
    global email
    data = request.get_json()
    item_name = data.get('name')

    user = User.query.filter_by(email=email).first()

    user.logbook_field = item_name
    db.session.commit()

    return jsonify({"message": f"Item '{item_name}' added successfully!"}), 201

@app.route('/add-item1', methods=['POST'])
def add_item1():
    global email
    data = request.get_json()
    item_name = data.get('name')

    user = User.query.filter_by(email=email).first()

    user.logbook_field1 = item_name
    db.session.commit()

    return jsonify({"message": f"Item '{item_name}' added successfully!"}), 201

@app.route('/clinical-work-historytaking', methods=['GET'])
def input():
    global email
    user = User.query.filter_by(email=email).first()

    if user:
        logbookfield = user.logbook_field
        subfield = user.logbook_field1

        subfield_id = Subfield.query.filter_by(subfield_name=subfield).first().subfield_id
        fields = InputField.query.filter_by(subfield_id=subfield_id).all()

        fields_list = [{"index_item": index_i.input_field_name} for index_i in fields]
        # return jsonify({'logbookfield': f'{logbookfield}', 'subfield': f'{subfield}'})
        return jsonify({'logbookfield': f'{logbookfield}', 'subfield': f'{subfield}', 'columnsToShow': f'{fields_list}'})
    else:
        return jsonify({'name': 'no name', 'registration': 'no reg', 'name1': f'no prof name'})
    
@app.route('/add-patients', methods=['POST'])
def add_patients():
    global email
    data = request.get_json()

    user = User.query.filter_by(email=email).first()
    subfield = user.logbook_field1

    logbook_field_id = LogbookField.query.filter_by(department_id=user.department_id).first().logbook_field_id
    subfield_id = Subfield.query.filter_by(logbook_field_id=logbook_field_id, subfield_name=subfield).first().subfield_id
    fields = InputField.query.filter_by(subfield_id=subfield_id).all()

    for i in range(1,len(fields)):
        field = fields[i].input_field_name
        entry = data['patients'][0][field]

        input_field_id = InputField.query.filter_by(subfield_id=subfield_id, input_field_name=field).first().input_field_id
        new_entry = StudentEntry(user_id=user.id, subfield_id=subfield_id, input_field_id=input_field_id, input_value=entry)
        db.session.add(new_entry)

    db.session.commit()

    return jsonify({"message": f"{data}"}), 201

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
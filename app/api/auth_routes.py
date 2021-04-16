from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            userName=form.data['userName'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401

# def user_exists(form, field):
#     print("Checking if user exists", field.data)
#     email = field.data
#     if not email:
#         raise ValidationError('No email provided')
#     if not re.match("[^@]+@[^@]+\.[^@]+", email):
#         raise ValidationError('Provided email is not an email address')

#     if User.query.filter(User.email == email).first():
#         raise ValidationError("User is already registered.")


# def username_exists(form, field):
#     print("Checking if username exists",  field.data)
#     username = field.data
#     if not username:
#         raise ValidationError('No username provided')

#     if User.query.filter(User.username == username).first():
#         raise ValidationError("is already in use.")

#     if len(username) < 5 or len(username) > 20:
#         raise ValidationError('must be between 5 and 20 characters')

# def password_matches(form, field):
#     print("Checking if password matches", field.data)
#     password = field.data

#     if not re.match('\d.*[A-Z]|[A-Z].*\d', password):
#         raise ValidationError(
#             'must contain 1 capital letter and 1 number')

#     if len(password) < 8 or len(password) > 50:
#         raise ValidationError('must be between 8 and 50 characters')

from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
import re


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not email:
        raise ValidationError('No email provided')
    if not re.match("[^@]+@[^@]+\.[^@]+", email):
        raise ValidationError('Provided email is not an email address')
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    userName = StringField('userName', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])

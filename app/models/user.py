from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  userName = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashedPassword = db.Column(db.String(255), nullable = False)
  profileImageURL = db.Column(db.String(255))
  location = db.Column(db.String(255))
  homeCourse = db.Column(db.String(255))
  createdAt = db.Column(db.DateTime,  default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())


  @property
  def password(self):
    return self.hashedPassword


  @password.setter
  def password(self, password):
    self.hashedPassword = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "userName": self.userName,
      "email": self.email,
      "profileImageURL": self.profileImageURL,
      "location": self.location,
      "homeCourse": self.homeCourse
    }

from .db import db


class Course(db.Model):
  __tablename__ = 'courses'

  id = db.Column(db.Integer, primary_key = True)
  courseName = db.Column(db.String(40), nullable = False, unique = True)
  address = db.Column(db.String(100), nullable = False)
  location = db.Column(db.String(50), nullable = False)
  description = db.Column(db.String(5000))
  imageURL = db.Column(db.Text, nullable = False)
  createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())


  def to_dict(self):
    return {
      "id": self.id,
      "courseName": self.courseName,
      "address": self.address,
      "location": self.location,
      "description": self.description,
      "imageURL": self.imageURL,
    },


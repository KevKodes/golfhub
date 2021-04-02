from .db import db


class Teebox(db.Model):
  __tablename__ = 'teeboxes'

  id = db.Column(db.Integer, primary_key = True)
  courseId = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
  teeboxName = db.Column(db.String(30), nullable=False)
  frontYardage = db.Column(db.Integer)
  backYardage = db.Column(db.Integer)
  slope = db.Column(db.Integer, nullable=False)
  rating = db.Column(db.Integer, nullable=False)
  createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

  course = db.relationship('Course', backref="teeboxes")


  def to_dict(self):
    return {
      "id": self.id,
      "courseId": self.courseId,
      "teeboxName": self.teeboxName,
      "frontYardage": self.frontYardage,
      "backYardage": self.backYardage,
      "slope": self.slope,
      "rating": self.rating
    }
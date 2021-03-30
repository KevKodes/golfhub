from .db import db


class Teebox(db.Model):
  __tablename__ = 'teeboxes'

  id = db.Column(db.Integer, primary_key = True)
  courseId = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
  teeboxName = db.Column(db.String(30), nullable=False)
  frontYardage = db.Column(db.Integer)
  backYardage = db.Column(db.Integer)
  createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

  course = db.relationship('Course', backref="teeboxes")
  
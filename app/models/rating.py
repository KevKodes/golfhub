from .db import db


class Rating(db.Model):
  __tablename__ = 'ratings'

  id = db.Column(db.Integer, primary_key = True)
  courseId = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
  teeboxId = db.Column(db.Integer, db.ForeignKey('teeboxes.id'), nullable=False)
  slope = db.Column(db.Integer, nullable=False)
  rating = db.Column(db.Integer, nullable=False)
  createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

  course = db.relationship('Course', backref="ratings")
  teebox = db.relationship('Teebox', backref="ratings")

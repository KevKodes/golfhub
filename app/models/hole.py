from .db import db


class Hole(db.Model):
  __tablename__ = 'holes'

  id = db.Column(db.Integer, primary_key = True)
  # courseId = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
  teeboxId = db.Column(db.Integer, db.ForeignKey('teeboxes.id'), nullable=False)
  holeNumber = db.Column(db.Integer, nullable=False)
  par = db.Column(db.Integer, nullable=False)
  yardage = db.Column(db.Integer, nullable=False)
  handicap = db.Column(db.Integer, nullable=False)
  createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

  # course = db.relationship('Course', backref="holes")
  teebox = db.relationship('Teebox', backref="holes")


  def to_dict(self):
    return {
      "id": self.id,
      "teeboxId": self.teeboxId,
      "holeNumber": self.holeNumber,
      "par": self.par,
      "yardage": self.yardage,
      "handicap": self.handicap
    }
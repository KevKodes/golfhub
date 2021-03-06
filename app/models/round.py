from .db import db


class Round(db.Model):
  __tablename__ = 'rounds'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  # courseId = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
  teeboxId = db.Column(db.Integer, db.ForeignKey('teeboxes.id'), nullable=False)
  roundDate = db.Column(db.DateTime, nullable=False)
  createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

  user = db.relationship('User', backref="rounds")
  # course = db.relationship('Course', backref="rounds")
  teebox = db.relationship('Teebox', backref="rounds")


  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "teeboxId": self.teeboxId,
      "roundDate": self.roundDate,
      "teebox": {
        "teeboxName": self.teebox.teeboxName,
        "courseId": self.teebox.courseId,
        "frontYardage": self.teebox.frontYardage,
        "backYardage": self.teebox.backYardage,
        "slope": self.teebox.slope,
        "rating": self.teebox.rating
      }
    }


  def to_id_dict(self):
    return {
      "id": self.id
    }

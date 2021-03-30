from .db import db


class Score(db.Model):
  __tablename__ = 'scores'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  courseId = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
  roundDate = db.Column(db.DateTime, nullable=False)
  teebox = db.Column(db.String(50), nullable=False)
  scorecard = db.Column(db.JSON, nullable=False)
  createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

  user = db.relationship('User', backref="scores")
  course = db.relationship('Course', backref="scores")


  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "courseId": self.courseId,
      "roundDate": self.roundDate,
      "teebox": self.teebox,
      "scorecard": self.scorecard
    }

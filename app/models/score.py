from .db import db


class Score(db.Model):
  __tablename__ = 'scores'

  id = db.Column(db.Integer, primary_key = True)
  roundId = db.Column(db.Integer, db.ForeignKey('rounds.id'), nullable=False)
  holeId = db.Column(db.Integer, db.ForeignKey('holes.id'), nullable=False)
  score = db.Column(db.Integer, nullable=False)
  numPutts = db.Column(db.Integer)
  fairway = db.Column(db.Boolean)
  createdAt = db.Column(db.DateTime, default=db.func.current_timestamp())
  updatedAt = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

  round = db.relationship('Round', backref="scores")
  hole = db.relationship('Hole', backref="scores")


  def to_dict(self):
    return {
      "id": self.id,
      "roundId": self.roundId,
      "holeId": self.holeId,
      "score": self.score,
      "numPutts": self.numPutts,
      "fairway": self.fairway
    }

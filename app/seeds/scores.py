from app.models import db, Score
import datetime


def seed_scores():
  
  for i in range(1,19):
    new_score = Score(roundId=1,holeId=i,score=5,numPutts=2,fairway=True)
    db.session.add(new_score)

  db.session.commit()


def undo_scores():
  db.session.execute('TRUNCATE scores;')
  db.session.commit()
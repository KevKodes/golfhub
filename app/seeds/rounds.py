from app.models import db, Round
import datetime


def seed_rounds():
  
  round1 = Round(userId=1,teeboxId=1,roundDate=datetime.datetime(2021,3,17))
  round2 = Round(userId=1,teeboxId=2,roundDate=datetime.datetime(2021,3,5))

  db.session.add(round1)
  db.session.add(round2)
  db.session.commit()


def undo_rounds():
  db.session.execute('TRUNCATE rounds;')
  db.session.commit()
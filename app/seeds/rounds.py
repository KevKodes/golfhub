from app.models import db, Round
import datetime


def seed_rounds():
  rounds = {}
  # TPC Championship (holes 1-18)
  rounds[1] = Round(userId=1,teeboxId=1,roundDate=datetime.datetime(2021,3,17))
  rounds[2] = Round(userId=1,teeboxId=1,roundDate=datetime.datetime(2021,3,5))
  rounds[3] = Round(userId=1,teeboxId=1,roundDate=datetime.datetime(2021,1,3))
  rounds[4] = Round(userId=1,teeboxId=1,roundDate=datetime.datetime(2021,1,12))
  rounds[5] = Round(userId=1,teeboxId=1,roundDate=datetime.datetime(2021,2,1))
  rounds[6] = Round(userId=1,teeboxId=1,roundDate=datetime.datetime(2021,2,8))
  # TPC Players (holes 19-36)
  rounds[7] = Round(userId=1,teeboxId=2,roundDate=datetime.datetime(2021,2,15))
  rounds[8] = Round(userId=1,teeboxId=2,roundDate=datetime.datetime(2021,3,2))
  rounds[9] = Round(userId=1,teeboxId=2,roundDate=datetime.datetime(2021,1,8))
  rounds[10] = Round(userId=1,teeboxId=2,roundDate=datetime.datetime(2021,1,9))
  rounds[11] = Round(userId=1,teeboxId=2,roundDate=datetime.datetime(2021,1,10))
  rounds[12] = Round(userId=1,teeboxId=2,roundDate=datetime.datetime(2021,2,9))
  # Ak-Chin Tips (holes 55-72)
  rounds[13] = Round(userId=1,teeboxId=4,roundDate=datetime.datetime(2021,2,10))
  rounds[14] = Round(userId=1,teeboxId=4,roundDate=datetime.datetime(2021,2,11))
  rounds[15] = Round(userId=1,teeboxId=4,roundDate=datetime.datetime(2021,2,12))
  rounds[16] = Round(userId=1,teeboxId=4,roundDate=datetime.datetime(2021,2,13))
  rounds[17] = Round(userId=1,teeboxId=4,roundDate=datetime.datetime(2021,2,21))
  rounds[18] = Round(userId=1,teeboxId=4,roundDate=datetime.datetime(2021,2,22))
  # Ak-Chin Gold (holes 73-90)
  rounds[19] = Round(userId=1,teeboxId=5,roundDate=datetime.datetime(2021,2,25))
  rounds[20] = Round(userId=1,teeboxId=5,roundDate=datetime.datetime(2020,12,8))
  rounds[21] = Round(userId=1,teeboxId=5,roundDate=datetime.datetime(2020,12,12))
  rounds[22] = Round(userId=1,teeboxId=5,roundDate=datetime.datetime(2020,12,15))
  rounds[23] = Round(userId=1,teeboxId=5,roundDate=datetime.datetime(2020,12,16))
  rounds[24] = Round(userId=1,teeboxId=5,roundDate=datetime.datetime(2020,12,24))

  for i in range(1,25):
    db.session.add(rounds[i])

  db.session.commit()


def undo_rounds():
  db.session.execute('TRUNCATE rounds;')
  db.session.commit()
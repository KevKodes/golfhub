from app.models import db, Score, Hole
import datetime
import random


def seed_scores():

  holes = Hole.query.all()

  for x in range(1,25): # this is all the rounds
    if x <= 6:
      for i in range(1,19):
        strokes = random.randint(3,7)
        putts = 3 if strokes==7 else 2
        hole = next(x for x in holes if x.id == i)
        fair= None if hole.par == 3 else True if strokes in [3,4,5] else False
        new_score = Score(roundId=x,holeId=i,score=strokes,numPutts=putts,fairway=fair)
        db.session.add(new_score)
    elif 7<=x<=12:
      for i in range(19,37):
        strokes = random.randint(3,7)
        putts = 3 if strokes==7 else 2
        hole = next(x for x in holes if x.id == i)
        fair= None if hole.par == 3 else True if strokes in [3,4] else False
        new_score = Score(roundId=x,holeId=i,score=strokes,numPutts=putts,fairway=fair)
        db.session.add(new_score)
    elif 13<=x<=18:
      for i in range(55,73):
        strokes = random.randint(3,7)
        putts = 3 if strokes==7 else 2
        hole = next(x for x in holes if x.id == i)
        fair= None if hole.par == 3 else True if strokes in [3,4] else False
        new_score = Score(roundId=x,holeId=i,score=strokes,numPutts=putts,fairway=fair)
        db.session.add(new_score)
    else:
      for i in range(73,91):
        strokes = random.randint(3,7)
        putts = 3 if strokes==7 else 2
        hole = next(x for x in holes if x.id == i)
        fair= None if hole.par == 3 else True if strokes in [3,4,5] else False
        new_score = Score(roundId=x,holeId=i,score=strokes,numPutts=putts,fairway=fair)
        db.session.add(new_score)

  db.session.commit()


def undo_scores():
  db.session.execute('TRUNCATE scores;')
  db.session.commit()
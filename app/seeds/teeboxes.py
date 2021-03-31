from app.models import db, Teebox


def seed_teeboxes():
  boxes = {}

  # TPC Scottsdale
  boxes[1]= Teebox(courseId=1,teeboxName='Championship',frontYardage=3631,backYardage=3630,slope=142,rating=74.70)
  boxes[2]= Teebox(courseId=1,teeboxName='Players',frontYardage=3293,backYardage=3321,slope=131,rating=71.50)
  boxes[3]= Teebox(courseId=1,teeboxName='Resort',frontYardage=3060,backYardage=3050,slope=123,rating=68.40)
  # Southern Dunes
  boxes[4]= Teebox(courseId=2,teeboxName='Tips',frontYardage=3809,backYardage=3737,slope=140,rating=76.10)
  boxes[5]= Teebox(courseId=2,teeboxName='Gold',frontYardage=3420,backYardage=3482,slope=132,rating=72.70)
  boxes[6]= Teebox(courseId=2,teeboxName='White',frontYardage=2967,backYardage=3014,slope=124,rating=68.70)

  for i in range(1,7):
    db.session.add(boxes[i])
  db.session.commit()


def undo_teeboxes():
  db.session.execute('TRUNCATE teeboxes;')
  db.session.commit()
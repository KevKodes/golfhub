from app.models import db, Teebox


def seed_teeboxes():
  boxes = {}
  teebox1= Teebox(courseId=1,teeboxName='Championship',frontYardage=3631,backYardage=3630,slope=142,rating=74.70)
  teebox2= Teebox(courseId=1,teeboxName='Players',frontYardage=3293,backYardage=3321,slope=131,rating=71.50)
  teebox3= Teebox(courseId=1,teeboxName='Resort',frontYardage=3060,backYardage=3050,slope=123,rating=68.40)

  for i in range(1,4):
    db.session.add(boxes[i])
  db.session.commit()


def undo_teeboxes():
  db.session.execute('TRUNCATE teeboxes;')
  db.session.commit()
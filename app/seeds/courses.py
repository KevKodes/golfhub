from app.models import db, Course


def seed_courses():
  
  course1 = Course(courseName="The Stadium Course at TPC Scottsdale", address="17020 North Hayden Rd., Scottsdale, Arizona, 85255", location="33.64062,-111.90887", description="Set in the Sonoran Desert and surrounded by the majestic McDowell Mountains, the Tournament Players Club of Scottsdale, a 36-hole daily fee public golf course owned and operated by the PGA TOUR represents the standards of excellence in golf operations world wide. The design team of Tom Weiskopf and Jay Morrish created a masterful blend of challenge and playability between the Stadium Course and the Champions Course, two uniquely different golfing venues. From the first moment you arrive at TPC Scottsdale, the home of the PGA TOUR's Waste Management Phoenix Open, you will experience first hand what sets TPC Network Clubs apart from all other golf facilities. TPC Scottsdale, a PGA TOUR Facility, embodies the standards of excellence in golf operations world wide.", imageURL="https://x8t5x9a4.map2.ssl.hwcdn.net/app/courses/image/preview/104982.jpg")

  db.session.add(course1)
  db.session.commit()


def undo_courses():
  db.session.execute('TRUNCATE courses;')
  db.session.commit()

from app.models import db, Course
from flask import jsonify


def seed_courses():
  ratings1 = {
    Championship: {
      slope: 142,
      rating: 74.70,
      1: { par: 4, yards: 403, handicap: 14 },
      2: { par: 4, yards: 442, handicap: 8 },
      3: { par: 5, yards: 558, handicap: 4 },
      4: { par: 3, yards: 183, handicap: 18 },
      5: { par: 4, yards: 470, handicap: 6 },
      6: { par: 4, yards: 432, handicap: 12 },
      7: { par: 3, yards: 215, handicap: 16 },
      8: { par: 4, yards: 475, handicap: 2 },
      9: { par: 4, yards: 453, handicap: 10 },
      10: { par: 4, yards: 428, handicap: 11 },
      11: { par: 4, yards: 472, handicap: 1 },
      12: { par: 3, yards: 192, handicap: 15 },
      13: { par: 5, yards: 558, handicap: 5 },
      14: { par: 4, yards: 490, handicap: 7 },
      15: { par: 5, yards: 553, handicap: 9 },
      16: { par: 3, yards: 163, handicap: 17 },
      17: { par: 4, yards: 332, handicap: 13 },
      18: { par: 4, yards: 442, handicap: 3 },
    },
    Players: {
      slope: 131,
      rating: 71.50,
      1: { par: 4, yards: 355, handicap: 14 },
      2: { par: 4, yards: 410, handicap: 8 },
      3: { par: 5, yards: 530, handicap: 4 },
      4: { par: 3, yards: 157, handicap: 18 },
      5: { par: 4, yards: 417, handicap: 6 },
      6: { par: 4, yards: 386, handicap: 12 },
      7: { par: 3, yards: 188, handicap: 16 },
      8: { par: 4, yards: 445, handicap: 2 },
      9: { par: 4, yards: 405, handicap: 10 },
      10: { par: 4, yards: 402, handicap: 11 },
      11: { par: 4, yards: 446, handicap: 1 },
      12: { par: 3, yards: 170, handicap: 15 },
      13: { par: 5, yards: 508, handicap: 5 },
      14: { par: 4, yards: 461, handicap: 7 },
      15: { par: 5, yards: 498, handicap: 9 },
      16: { par: 3, yards: 140, handicap: 17 },
      17: { par: 4, yards: 294, handicap: 13 },
      18: { par: 4, yards: 402, handicap: 3 },
    },
  }
  course1 = Course(courseName="The Stadium Course at TPC Scottsdale", address="17020 North Hayden Rd., Scottsdale, Arizona, 85255", location="33.64062,-111.90887", description="Set in the Sonoran Desert and surrounded by the majestic McDowell Mountains, the Tournament Players Club of Scottsdale, a 36-hole daily fee public golf course owned and operated by the PGA TOUR represents the standards of excellence in golf operations world wide. The design team of Tom Weiskopf and Jay Morrish created a masterful blend of challenge and playability between the Stadium Course and the Champions Course, two uniquely different golfing venues. From the first moment you arrive at TPC Scottsdale, the home of the PGA TOUR's Waste Management Phoenix Open, you will experience first hand what sets TPC Network Clubs apart from all other golf facilities. TPC Scottsdale, a PGA TOUR Facility, embodies the standards of excellence in golf operations world wide.", imageURL="https://x8t5x9a4.map2.ssl.hwcdn.net/app/courses/image/preview/104982.jpg", ratings=jsonify(ratings1))

  db.session.add(course1)
  db.session.commit()


def undo_users():
  db.session.execute('TRUNCATE users;')
  db.session.commit()

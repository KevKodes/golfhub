from app.models import db, Hole


def seed_holes():
  holes = {}
  # TPC Scottsdale
  holes[1] = Hole(teeboxId=1,holeNumber=1,par=4,yardage=403,handicap=14)
  holes[2] = Hole(teeboxId=1,holeNumber=2,par=4,yardage=442,handicap=8)
  holes[3] = Hole(teeboxId=1,holeNumber=3,par=5,yardage=558,handicap=4)
  holes[4] = Hole(teeboxId=1,holeNumber=4,par=3,yardage=183,handicap=18)
  holes[5] = Hole(teeboxId=1,holeNumber=5,par=4,yardage=470,handicap=6)
  holes[6] = Hole(teeboxId=1,holeNumber=6,par=4,yardage=432,handicap=12)
  holes[7] = Hole(teeboxId=1,holeNumber=7,par=3,yardage=215,handicap=16)
  holes[8] = Hole(teeboxId=1,holeNumber=8,par=4,yardage=475,handicap=2)
  holes[9] = Hole(teeboxId=1,holeNumber=9,par=4,yardage=453,handicap=10)
  holes[10] = Hole(teeboxId=1,holeNumber=10,par=4,yardage=428,handicap=11)
  holes[11] = Hole(teeboxId=1,holeNumber=11,par=4,yardage=428,handicap=1)
  holes[12] = Hole(teeboxId=1,holeNumber=12,par=3,yardage=428,handicap=15)
  holes[13] = Hole(teeboxId=1,holeNumber=13,par=5,yardage=428,handicap=5)
  holes[14] = Hole(teeboxId=1,holeNumber=14,par=4,yardage=428,handicap=7)
  holes[15] = Hole(teeboxId=1,holeNumber=15,par=5,yardage=428,handicap=9)
  holes[16] = Hole(teeboxId=1,holeNumber=16,par=3,yardage=428,handicap=17)
  holes[17] = Hole(teeboxId=1,holeNumber=17,par=4,yardage=428,handicap=13)
  holes[18] = Hole(teeboxId=1,holeNumber=18,par=4,yardage=428,handicap=3)

  holes[19] = Hole(teeboxId=2,holeNumber=1,par=4,yardage=355,handicap=14)
  holes[20] = Hole(teeboxId=2,holeNumber=2,par=4,yardage=410,handicap=8)
  holes[21] = Hole(teeboxId=2,holeNumber=3,par=5,yardage=530,handicap=4)
  holes[22] = Hole(teeboxId=2,holeNumber=4,par=3,yardage=157,handicap=18)
  holes[23] = Hole(teeboxId=2,holeNumber=5,par=4,yardage=417,handicap=6)
  holes[24] = Hole(teeboxId=2,holeNumber=6,par=4,yardage=386,handicap=12)
  holes[25] = Hole(teeboxId=2,holeNumber=7,par=3,yardage=188,handicap=16)
  holes[26] = Hole(teeboxId=2,holeNumber=8,par=4,yardage=445,handicap=2)
  holes[27] = Hole(teeboxId=2,holeNumber=9,par=4,yardage=405,handicap=10)
  holes[28] = Hole(teeboxId=2,holeNumber=10,par=4,yardage=402,handicap=11)
  holes[29] = Hole(teeboxId=2,holeNumber=11,par=4,yardage=446,handicap=1)
  holes[30] = Hole(teeboxId=2,holeNumber=12,par=3,yardage=170,handicap=15)
  holes[31] = Hole(teeboxId=2,holeNumber=13,par=5,yardage=508,handicap=5)
  holes[32] = Hole(teeboxId=2,holeNumber=14,par=4,yardage=461,handicap=7)
  holes[33] = Hole(teeboxId=2,holeNumber=15,par=5,yardage=498,handicap=9)
  holes[34] = Hole(teeboxId=2,holeNumber=16,par=3,yardage=140,handicap=17)
  holes[35] = Hole(teeboxId=2,holeNumber=17,par=4,yardage=294,handicap=13)
  holes[36] = Hole(teeboxId=2,holeNumber=18,par=4,yardage=402,handicap=3)

  holes[37] = Hole(teeboxId=3,holeNumber=1,par=4,yardage=339,handicap=14)
  holes[38] = Hole(teeboxId=3,holeNumber=2,par=4,yardage=386,handicap=8)
  holes[39] = Hole(teeboxId=3,holeNumber=3,par=5,yardage=510,handicap=4)
  holes[40] = Hole(teeboxId=3,holeNumber=4,par=3,yardage=141,handicap=18)
  holes[41] = Hole(teeboxId=3,holeNumber=5,par=4,yardage=373,handicap=6)
  holes[42] = Hole(teeboxId=3,holeNumber=6,par=4,yardage=348,handicap=12)
  holes[43] = Hole(teeboxId=3,holeNumber=7,par=3,yardage=164,handicap=16)
  holes[44] = Hole(teeboxId=3,holeNumber=8,par=4,yardage=418,handicap=2)
  holes[45] = Hole(teeboxId=3,holeNumber=9,par=4,yardage=381,handicap=10)
  holes[46] = Hole(teeboxId=3,holeNumber=10,par=4,yardage=373,handicap=11)
  holes[47] = Hole(teeboxId=3,holeNumber=11,par=4,yardage=416,handicap=1)
  holes[48] = Hole(teeboxId=3,holeNumber=12,par=3,yardage=149,handicap=15)
  holes[49] = Hole(teeboxId=3,holeNumber=13,par=5,yardage=482,handicap=5)
  holes[50] = Hole(teeboxId=3,holeNumber=14,par=4,yardage=426,handicap=7)
  holes[51] = Hole(teeboxId=3,holeNumber=15,par=5,yardage=459,handicap=9)
  holes[52] = Hole(teeboxId=3,holeNumber=16,par=3,yardage=119,handicap=17)
  holes[53] = Hole(teeboxId=3,holeNumber=17,par=4,yardage=255,handicap=13)
  holes[54] = Hole(teeboxId=3,holeNumber=18,par=4,yardage=371,handicap=3)

  # Southern Dunes

  for i in range(1,55):
    db.session.add(holes[i])

  db.session.commit()


def undo_holes():
  db.session.execute('TRUNCATE holes;')
  db.session.commit()

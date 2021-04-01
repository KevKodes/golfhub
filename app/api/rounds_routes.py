from flask import Blueprint
from sqlalchemy.orm import joinedload
from app.models import db, Round, Teebox, Score, Course

rounds_routes = Blueprint('rounds', __name__)


def get_round_data(round_id):
  hole_scores = db.session.query(Score).options(joinedload(Score.hole)).filter_by(roundId=round_id).all()

  total_score = 0
  hit_fairways = 0
  total_fairways = 0
  total_putts = 0
  hit_greens = 0
  pars = 0
  birdies = 0
  eagles = 0
  for score in hole_scores:
    total_score += score.score
    total_putts += score.numPutts
    if score.fairway != None:
      total_fairways += 1
      if score.fairway:
        hit_fairways += 1
    if score.score - score.numPutts <= score.hole.par - 2:
      hit_greens += 1
    if score.hole.par == score.score + 2:
      eagles += 1
    elif score.hole.par == score.score + 1:
      birdies += 1
    elif score.hole.par == score.score:
      pars += 1

  fir = hit_fairways / total_fairways
  gir = hit_greens / 18
  round_data = {
    "total_score": total_score,
    "total_putts": total_putts,
    "fir": fir,
    "gir": gir,
    "pars": pars,
    "birdies": birdies,
    "eagles": eagles
  }
  
  return round_data


@rounds_routes.route('/<int:id>')
def get_dash_rounds(id):
  # Lazy loading
  # rounds_and_tees = Round.query.filter_by(userId=id).all()
  # Eager loading
  rounds_and_tees = db.session.query(Round).options(joinedload(Round.teebox)).filter_by(userId=id).order_by(Round.roundDate.desc()).all()
  courses = Course.query.all()
  dashboard_data = []
  for round in rounds_and_tees:
    round_data = get_round_data(round.id)
    course_id = round.teebox.courseId
    course_name = next(course.courseName for course in courses if course.id == course_id)
    new_round_data = {
      "roundId": round.id,
      "round_data": round_data,
      "roundDate": round.roundDate,
      "courseName": course_name,
      "teebox": round.teebox.teeboxName
    }
    dashboard_data.append(new_round_data)

  return {"dashboard_rounds": dashboard_data}
  # return {"rounds": [round.to_dict() for round in rounds_and_tees]}

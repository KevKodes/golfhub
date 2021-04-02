from flask import Blueprint
from app.models import db, Course, Teebox, Hole

course_routes = Blueprint('courses', __name__)


@course_routes.route('')
def get_all_courses():
  courses = Course.query.all()
  return {"courses": [course.to_dict() for course in courses]}


@course_routes.route('/<int:id>/scorecard')
def get_course_scorecard(id):
  tees = Teebox.query.filter(Teebox.courseId==id).all()
  teebox_id_list = [teebox.id for teebox in tees]
  holes = Hole.query.filter(Hole.teeboxId.in_(teebox_id_list)).all()
  return {
    "tees": [teebox.to_dict() for teebox in tees],
    "holes": [hole.to_dict() for hole in holes]
  }
  
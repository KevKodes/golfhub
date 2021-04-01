from flask import Blueprint
from app.models import Course

course_routes = Blueprint('courses', __name__)


@course_routes.route('/')
def get_all_courses():
  courses = Course.query.all()
  return {"courses": [course.to_dict() for course in courses]}
  
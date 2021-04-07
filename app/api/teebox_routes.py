from flask import Blueprint
from app.models import db, Teebox, Course

teebox_routes = Blueprint('teeboxes', __name__)


@teebox_routes.route('/<int:id>')
def get_course_teeboxes(id):
  teeboxes = Teebox.query.filter(Teebox.courseId==id).all()
  return {"courseTees": [teebox.to_dict() for teebox in teeboxes]}

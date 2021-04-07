from flask import Blueprint
from app.models import db, Teebox, Hole

hole_routes = Blueprint('holes', __name__)


@hole_routes.route('/<int:id>')
def get_teebox_data(id):
  holes = Hole.query.filter(Hole.teeboxId==id).order_by(Hole.holeNumber).all()
  return {"holes": [hole.to_dict() for hole in holes]}

from flask import Blueprint, request, jsonify
from sqlalchemy.orm import joinedload
from app.models import db, Round, Teebox, Score, Course

scores_routes = Blueprint('scores', __name__)


@scores_routes.route('', methods=['POST'])
def add_score():
  for score in request.json:
    fairway_bool = None
    if (score['fairway'] == 'false' or score['fairway'] == False):
      fairway_bool = False
    elif (score['fairway'] == 'true' or score['fairway'] == True):
      fairway_bool = True
    new_score = Score(roundId=score['roundId'],
                      holeId=score['holeId'],
                      score=int(score['score']),
                      numPutts=int(score['numPutts']),
                      fairway=fairway_bool)
    db.session.add(new_score)
    # print(new_score)
  db.session.commit()

  return '', 200

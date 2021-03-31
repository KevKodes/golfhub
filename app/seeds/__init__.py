from flask.cli import AppGroup
from .users import seed_users, undo_users
from .courses import seed_courses, undo_courses
from .rounds import seed_rounds, undo_rounds
from .teeboxes import seed_teeboxes, undo_teeboxes
from .holes import seed_holes, undo_holes
from .scores import seed_scores, undo_scores

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_courses()
    seed_teeboxes()
    seed_rounds()
    seed_holes()
    seed_scores()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_courses()
    undo_rounds()
    undo_teeboxes()
    undo_holes()
    undo_scores()
    # Add other undo functions here

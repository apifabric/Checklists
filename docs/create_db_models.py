# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

import os
import datetime
from sqlalchemy import create_engine, Column, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Establish connection to sqlite database
database_path = "system/genai/temp/model.sqlite"
os.makedirs(os.path.dirname(database_path), exist_ok=True)
engine = create_engine(f"sqlite:///system/genai/temp/create_db_models.sqlite", echo=False)

Base = declarative_base()

class User(Base):
    """description: Represents users of the checklist app."""
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=True)

class Checklist(Base):
    """description: Represents a collection of tasks for a specific purpose or goal."""
    __tablename__ = 'checklists'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    created_date = Column(DateTime, default=datetime.datetime.now)

class Task(Base):
    """description: Represents individual tasks within a checklist."""
    __tablename__ = 'tasks'

    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String, nullable=False)
    due_date = Column(DateTime, nullable=True)
    is_complete = Column(Boolean, default=False)
    checklist_id = Column(Integer, ForeignKey('checklists.id'), nullable=False)

class Comment(Base):
    """description: Represents comments related to tasks."""
    __tablename__ = 'comments'

    id = Column(Integer, primary_key=True, autoincrement=True)
    content = Column(String, nullable=False)
    task_id = Column(Integer, ForeignKey('tasks.id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=True)

class Tag(Base):
    """description: Represents tags for categorizing tasks."""
    __tablename__ = 'tags'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class TaskTag(Base):
    """description: Junction table linking tasks and tags."""
    __tablename__ = 'task_tags'

    id = Column(Integer, primary_key=True, autoincrement=True)
    task_id = Column(Integer, ForeignKey('tasks.id'), nullable=False)
    tag_id = Column(Integer, ForeignKey('tags.id'), nullable=False)

class Priority(Base):
    """description: Represents different priorities that can be assigned to tasks."""
    __tablename__ = 'priorities'

    id = Column(Integer, primary_key=True, autoincrement=True)
    level = Column(String, nullable=False)

class TaskPriority(Base):
    """description: Junction table linking tasks and priorities."""
    __tablename__ = 'task_priorities'

    id = Column(Integer, primary_key=True, autoincrement=True)
    task_id = Column(Integer, ForeignKey('tasks.id'), nullable=False)
    priority_id = Column(Integer, ForeignKey('priorities.id'), nullable=False)

class Reminder(Base):
    """description: Represents reminders set for tasks."""
    __tablename__ = 'reminders'

    id = Column(Integer, primary_key=True, autoincrement=True)
    task_id = Column(Integer, ForeignKey('tasks.id'), nullable=False)
    reminder_time = Column(DateTime, nullable=False)

class Attachment(Base):
    """description: Represents files attached to tasks."""
    __tablename__ = 'attachments'

    id = Column(Integer, primary_key=True, autoincrement=True)
    task_id = Column(Integer, ForeignKey('tasks.id'), nullable=False)
    filename = Column(String, nullable=False)
    file_path = Column(String, nullable=False)

class Notification(Base):
    """description: Represents notifications sent to users."""
    __tablename__ = 'notifications'

    id = Column(Integer, primary_key=True, autoincrement=True)
    content = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    sent_date = Column(DateTime, default=datetime.datetime.now)

class Collaboration(Base):
    """description: Represents collaborative checklists with multiple users."""
    __tablename__ = 'collaborations'

    id = Column(Integer, primary_key=True, autoincrement=True)
    checklist_id = Column(Integer, ForeignKey('checklists.id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)

# Create the tables
Base.metadata.create_all(engine)

# Begin adding sample data
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data
users = [
    User(username='alice', email='alice@example.com'),
    User(username='bob', email='bob@example.com')
]

checklists = [
    Checklist(name='Daily Tasks'),
    Checklist(name='Project X')
]

tasks = [
    Task(description='Buy groceries', checklist_id=1),
    Task(description='Complete report', checklist_id=2, due_date=datetime.datetime.now() + datetime.timedelta(days=3))
]

comments = [
    Comment(content='Don’t forget to buy milk', task_id=1, user_id=1)
]

tags = [
    Tag(name='Urgent'),
    Tag(name='Work'),
    Tag(name='Personal')
]

task_tags = [
    TaskTag(task_id=1, tag_id=1),
    TaskTag(task_id=2, tag_id=2)
]

priorities = [
    Priority(level='High'),
    Priority(level='Medium')
]

task_priorities = [
    TaskPriority(task_id=1, priority_id=1),
    TaskPriority(task_id=2, priority_id=2)
]

reminders = [
    Reminder(task_id=1, reminder_time=datetime.datetime.now()),
    Reminder(task_id=2, reminder_time=datetime.datetime.now() + datetime.timedelta(days=2))
]

attachments = [
    Attachment(task_id=1, filename='shopping_list.txt', file_path='/files/shopping_list.txt')
]

notifications = [
    Notification(content='Task due soon', user_id=1),
    Notification(content='New comment on task', user_id=2)
]

collaborations = [
    Collaboration(checklist_id=1, user_id=1),
    Collaboration(checklist_id=2, user_id=2)
]

# Add and commit sample data
session.add_all(users + checklists + tasks + comments + tags + task_tags + priorities + task_priorities + reminders + attachments + notifications + collaborations)
session.commit()

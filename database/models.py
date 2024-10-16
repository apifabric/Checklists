# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 16, 2024 05:41:54
# Database: sqlite:////tmp/tmp.jmRUJR6cRl/Checklists/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Checklist(SAFRSBaseX, Base):
    """
    description: Represents a collection of tasks for a specific purpose or goal.
    """
    __tablename__ = 'checklists'
    _s_collection_name = 'Checklist'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    created_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    CollaborationList : Mapped[List["Collaboration"]] = relationship(back_populates="checklist")
    TaskList : Mapped[List["Task"]] = relationship(back_populates="checklist")



class Priority(SAFRSBaseX, Base):
    """
    description: Represents different priorities that can be assigned to tasks.
    """
    __tablename__ = 'priorities'
    _s_collection_name = 'Priority'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    level = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    TaskPriorityList : Mapped[List["TaskPriority"]] = relationship(back_populates="priority")



class Tag(SAFRSBaseX, Base):
    """
    description: Represents tags for categorizing tasks.
    """
    __tablename__ = 'tags'
    _s_collection_name = 'Tag'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    TaskTagList : Mapped[List["TaskTag"]] = relationship(back_populates="tag")



class User(SAFRSBaseX, Base):
    """
    description: Represents users of the checklist app.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CollaborationList : Mapped[List["Collaboration"]] = relationship(back_populates="user")
    NotificationList : Mapped[List["Notification"]] = relationship(back_populates="user")
    CommentList : Mapped[List["Comment"]] = relationship(back_populates="user")



class Collaboration(SAFRSBaseX, Base):
    """
    description: Represents collaborative checklists with multiple users.
    """
    __tablename__ = 'collaborations'
    _s_collection_name = 'Collaboration'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    checklist_id = Column(ForeignKey('checklists.id'), nullable=False)
    user_id = Column(ForeignKey('users.id'), nullable=False)

    # parent relationships (access parent)
    checklist : Mapped["Checklist"] = relationship(back_populates=("CollaborationList"))
    user : Mapped["User"] = relationship(back_populates=("CollaborationList"))

    # child relationships (access children)



class Notification(SAFRSBaseX, Base):
    """
    description: Represents notifications sent to users.
    """
    __tablename__ = 'notifications'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    content = Column(String, nullable=False)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    sent_date = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("NotificationList"))

    # child relationships (access children)



class Task(SAFRSBaseX, Base):
    """
    description: Represents individual tasks within a checklist.
    """
    __tablename__ = 'tasks'
    _s_collection_name = 'Task'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    description = Column(String, nullable=False)
    due_date = Column(DateTime)
    is_complete = Column(Boolean)
    checklist_id = Column(ForeignKey('checklists.id'), nullable=False)

    # parent relationships (access parent)
    checklist : Mapped["Checklist"] = relationship(back_populates=("TaskList"))

    # child relationships (access children)
    AttachmentList : Mapped[List["Attachment"]] = relationship(back_populates="task")
    CommentList : Mapped[List["Comment"]] = relationship(back_populates="task")
    ReminderList : Mapped[List["Reminder"]] = relationship(back_populates="task")
    TaskPriorityList : Mapped[List["TaskPriority"]] = relationship(back_populates="task")
    TaskTagList : Mapped[List["TaskTag"]] = relationship(back_populates="task")



class Attachment(SAFRSBaseX, Base):
    """
    description: Represents files attached to tasks.
    """
    __tablename__ = 'attachments'
    _s_collection_name = 'Attachment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    task_id = Column(ForeignKey('tasks.id'), nullable=False)
    filename = Column(String, nullable=False)
    file_path = Column(String, nullable=False)

    # parent relationships (access parent)
    task : Mapped["Task"] = relationship(back_populates=("AttachmentList"))

    # child relationships (access children)



class Comment(SAFRSBaseX, Base):
    """
    description: Represents comments related to tasks.
    """
    __tablename__ = 'comments'
    _s_collection_name = 'Comment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    content = Column(String, nullable=False)
    task_id = Column(ForeignKey('tasks.id'), nullable=False)
    user_id = Column(ForeignKey('users.id'))

    # parent relationships (access parent)
    task : Mapped["Task"] = relationship(back_populates=("CommentList"))
    user : Mapped["User"] = relationship(back_populates=("CommentList"))

    # child relationships (access children)



class Reminder(SAFRSBaseX, Base):
    """
    description: Represents reminders set for tasks.
    """
    __tablename__ = 'reminders'
    _s_collection_name = 'Reminder'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    task_id = Column(ForeignKey('tasks.id'), nullable=False)
    reminder_time = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    task : Mapped["Task"] = relationship(back_populates=("ReminderList"))

    # child relationships (access children)



class TaskPriority(SAFRSBaseX, Base):
    """
    description: Junction table linking tasks and priorities.
    """
    __tablename__ = 'task_priorities'
    _s_collection_name = 'TaskPriority'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    task_id = Column(ForeignKey('tasks.id'), nullable=False)
    priority_id = Column(ForeignKey('priorities.id'), nullable=False)

    # parent relationships (access parent)
    priority : Mapped["Priority"] = relationship(back_populates=("TaskPriorityList"))
    task : Mapped["Task"] = relationship(back_populates=("TaskPriorityList"))

    # child relationships (access children)



class TaskTag(SAFRSBaseX, Base):
    """
    description: Junction table linking tasks and tags.
    """
    __tablename__ = 'task_tags'
    _s_collection_name = 'TaskTag'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    task_id = Column(ForeignKey('tasks.id'), nullable=False)
    tag_id = Column(ForeignKey('tags.id'), nullable=False)

    # parent relationships (access parent)
    tag : Mapped["Tag"] = relationship(back_populates=("TaskTagList"))
    task : Mapped["Task"] = relationship(back_populates=("TaskTagList"))

    # child relationships (access children)

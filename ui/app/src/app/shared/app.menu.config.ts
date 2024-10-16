import { MenuRootItem } from 'ontimize-web-ngx';

import { AttachmentCardComponent } from './Attachment-card/Attachment-card.component';

import { ChecklistCardComponent } from './Checklist-card/Checklist-card.component';

import { CollaborationCardComponent } from './Collaboration-card/Collaboration-card.component';

import { CommentCardComponent } from './Comment-card/Comment-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { PriorityCardComponent } from './Priority-card/Priority-card.component';

import { ReminderCardComponent } from './Reminder-card/Reminder-card.component';

import { TagCardComponent } from './Tag-card/Tag-card.component';

import { TaskCardComponent } from './Task-card/Task-card.component';

import { TaskPriorityCardComponent } from './TaskPriority-card/TaskPriority-card.component';

import { TaskTagCardComponent } from './TaskTag-card/TaskTag-card.component';

import { UserCardComponent } from './User-card/User-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Attachment', name: 'ATTACHMENT', icon: 'view_list', route: '/main/Attachment' }
    
        ,{ id: 'Checklist', name: 'CHECKLIST', icon: 'view_list', route: '/main/Checklist' }
    
        ,{ id: 'Collaboration', name: 'COLLABORATION', icon: 'view_list', route: '/main/Collaboration' }
    
        ,{ id: 'Comment', name: 'COMMENT', icon: 'view_list', route: '/main/Comment' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'Priority', name: 'PRIORITY', icon: 'view_list', route: '/main/Priority' }
    
        ,{ id: 'Reminder', name: 'REMINDER', icon: 'view_list', route: '/main/Reminder' }
    
        ,{ id: 'Tag', name: 'TAG', icon: 'view_list', route: '/main/Tag' }
    
        ,{ id: 'Task', name: 'TASK', icon: 'view_list', route: '/main/Task' }
    
        ,{ id: 'TaskPriority', name: 'TASKPRIORITY', icon: 'view_list', route: '/main/TaskPriority' }
    
        ,{ id: 'TaskTag', name: 'TASKTAG', icon: 'view_list', route: '/main/TaskTag' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AttachmentCardComponent

    ,ChecklistCardComponent

    ,CollaborationCardComponent

    ,CommentCardComponent

    ,NotificationCardComponent

    ,PriorityCardComponent

    ,ReminderCardComponent

    ,TagCardComponent

    ,TaskCardComponent

    ,TaskPriorityCardComponent

    ,TaskTagCardComponent

    ,UserCardComponent

];
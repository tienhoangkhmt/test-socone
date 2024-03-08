import React from 'react';
import { path_task } from '../constants/index.js';

const Route_Task = [
  {
    path: path_task.task,
    component: React.lazy(() => import('../screens/taskList/index.jsx')),
    isAuth: false,
  },
]

export default Route_Task;
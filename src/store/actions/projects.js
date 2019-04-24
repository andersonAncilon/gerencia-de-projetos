export function projectsADD(project) {
  return {
    type: 'ADD_PROJECT',
    project
  };
}

export function projectSetTime(time, projectId) {
  return {
    type: 'SET_PROJECT_TIME',
    time,
    projectId
  };
}

export function taskSetTime(time, projectId, taskId) {
  return {
    type: 'SET_TASK_TIME',
    time,
    projectId,
    taskId
  };
}

export function filterProject(id) {
  return {
    type: 'FILTER_PROJECT',
    id
  };
}

export function tasksAdd(task, projectId) {
  return {
    type: 'ADD_TASK',
    task,
    projectId
  };
}

export function changeTaskStatus(task) {
  return {
    type: 'CHANGE_TASK_STATUS',
    task
  };
}

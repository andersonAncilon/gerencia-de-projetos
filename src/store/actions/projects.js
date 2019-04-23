export function projectsADD(project) {
  return {
    type: 'ADD_PROJECT',
    project
  };
}

export function filterProject(id) {
  return {
    type: 'FILTER_PROJECT',
    id
  };
}

export function changeTaskStatus(task) {
  return {
    type: 'CHANGE_TASK_STATUS',
    task
  };
}

const INITIAL_STATE = {
  projects: [
    {
      id: 0,
      title: 'Projeto master',
      description: 'Fazer um CRUD',
      time: 0.0,
      tasks: [
        {
          id: 0,
          title: 'INSERT',
          description: 'Criar operação de insert',
          time: 0.0
        }
      ]
    },
    {
      id: 1,
      title: 'Projeto startup fitness',
      description: 'Fazer um CRUD',
      time: 0.0,
      tasks: [
        {
          id: 0,
          title: 'DELET',
          description: 'Criar operação de insert',
          time: 0.0
        }
      ]
    },
    {
      id: 2,
      title: 'Projeto startup data mining',
      description: 'Fazer um CRUD',
      time: 0.0,
      tasks: [
        {
          id: 0,
          title: 'ALTER',
          description: 'Criar operação de alter',
          time: 0.0
        },
        {
          id: 1,
          title: 'INSERT',
          description: 'Criar operação de insert',
          time: 0.0
        }
      ]
    }
  ],
  filteredProject: {}
};

export default function projects(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      const newProject = action.project;
      return { ...state, projects: [...state.projects, newProject] };

    case 'ADD_TASK':
      const newTask = action.task;
      const projects = state.projects;

      return {
        ...state,
        projects: projects.map(data => {
          if (data.id === action.projectId) {
            data.tasks.push(newTask);
            return data;
          }
          return data;
        })
      };

    case 'SET_PROJECT_TIME':
      const project = state.projects;
      return {
        ...state,
        projects: project.map(data => {
          if (data.id === action.projectId) {
            if (action.time !== undefined) {
              data.time = (
                parseFloat(action.time) + parseFloat(data.time)
              ).toFixed(1);
              data.time = parseFloat(data.time).toFixed(1);
            }
            return data;
          }
          return data;
        })
      };

    case 'SET_TASK_TIME':
      const proj = state.projects;
      return {
        ...state,
        projects: proj.map(data => {
          if (data.id === action.projectId) {
            data.tasks[action.taskId].time = action.time;
            return data;
          }
          return data;
        })
      };

    case 'FILTER_PROJECT':
      return {
        ...state,
        filteredProject: state.projects.filter(project => {
          return project.id === action.id;
        })
      };

    default:
      return state;
  }
}

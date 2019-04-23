const INITIAL_STATE = {
  projects: [
    {
      id: 0,
      title: 'Projeto master',
      description: 'Fazer um CRUD',
      time: 0,
      tasks: [
        {
          id: 0,
          title: 'INSERT',
          description: 'Criar operação de insert',
          time: 0
        }
      ]
    },
    {
      id: 1,
      title: 'Projeto startup fitness',
      description: 'Fazer um CRUD',
      time: 0,
      tasks: [
        {
          id: 0,
          title: 'DELET',
          description: 'Criar operação de insert',
          time: 0
        }
      ]
    },
    {
      id: 2,
      title: 'Projeto startup data mining',
      description: 'Fazer um CRUD',
      time: 0,
      tasks: [
        {
          id: 0,
          title: 'ALTER',
          description: 'Criar operação de alter',
          time: 0
        },
        {
          id: 1,
          title: 'INSERT',
          description: 'Criar operação de insert',
          time: 0
        }
      ]
    }
  ],
  filteredProject: {}
};

export default function projects(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      return { ...state.push(action.project) };
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

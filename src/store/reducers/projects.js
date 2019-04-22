const INITIAL_STATE = {
	projects: [
		{
			id: 0,
			title: 'Projeto master',
			description: 'Fazer um CRUD',
			tasks: [{ id: 0, title: 'INSERT', description: 'Criar operação de insert' }]
		},
		{
			id: 1,
			title: 'Projeto startup fitness',
			description: 'Fazer um CRUD',
			tasks: [{ id: 1, title: 'DELET', description: 'Criar operação de insert' }]
		},
		{
			id: 2,
			title: 'Projeto startup data mining',
			description: 'Fazer um CRUD',
			tasks: [{ id: 2, title: 'ALTER', description: 'Criar operação de insert' }]
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
				filteredProject: state.projects.filter((project) => {
					return project.id == action.id;
				})
			};
		default:
			return state;
	}
}

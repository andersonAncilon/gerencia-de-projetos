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

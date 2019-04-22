import React from 'react';
import './style.css';

import Card from '../../components/Card/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ProjectActions from '../../store/actions/projects';

const Home = ({ projects, filterProject, filteredProject }) => {
	return (
		<div className='container '>
			<h2>projetos</h2>
			<div className='row'>
				{projects.projects.map((data) => (
					<Card key={data.id} props={data} filterProject={(id) => filterProject(id)} />
				))}
			</div>
			{filteredProject}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => bindActionCreators(ProjectActions, dispatch);
const mapStateToProps = (state) => ({
	projects: state.projects,
	filteredProject: state.filteredProject
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

import React from 'react';

import { connect } from 'react-redux';

import Card from '../../components/Card';

const Tasks = ({ match, projects }) => (
	<div>
		<h2>Tasks</h2>
	</div>
);

export default connect((state) => ({
	projects: state.projects
}))(Tasks);

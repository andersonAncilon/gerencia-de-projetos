import React from 'react';

import { connect } from 'react-redux';

import CardTask from '../../components/CardTask';

import { bindActionCreators } from 'redux';

import * as ProjectActions from '../../store/actions/projects';

const Tasks = ({ filteredProject, changeTaskStatus }) => {
  function handleTaskChange() {
    //changeTaskStatus(task);
  }

  return (
    <div className="container ">
      <h2 className="text-center mt-5 mb-5">Tasks</h2>
      <div className="row">
        {filteredProject[0] ? (
          filteredProject[0].tasks.map(task => (
            <CardTask props={task} changeStatus={() => handleTaskChange()} />
          ))
        ) : (
          <h2 className="text-danger text-center">
            Nenhuma tarefa cadastrada!
          </h2>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProjectActions, dispatch);
const mapStateToProps = state => ({
  filteredProject: state.projects.filteredProject
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

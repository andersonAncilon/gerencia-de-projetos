import React, { useState } from 'react';

import { connect } from 'react-redux';

import CardTask from '../../components/CardTask';

import { bindActionCreators } from 'redux';

import * as ProjectActions from '../../store/actions/projects';

const Tasks = ({ filteredProject, changeTaskStatus }) => {
  const [taskState, setTaskState] = useState(null);

  return (
    <div className="container ">
      <h2 className="text-center mt-5 mb-5">Tarefas</h2>
      {taskState ? (
        <h2 className="text-success text-center">
          Tarefa selecionada: {taskState.title}
        </h2>
      ) : (
        <h2 className="text-danger text-center">
          Nenhuma tarefa foi selecionada
        </h2>
      )}
      <div className="row">
        {filteredProject[0] ? (
          filteredProject[0].tasks
            .filter(task => {
              return taskState !== null ? task === taskState : task;
            })
            .map(task => (
              <CardTask
                key={task.id}
                props={task}
                filterTask={task => setTaskState(task)}
              />
            ))
        ) : (
          <h2 className="text-danger mx-auto">Nenhuma tarefa cadastrada!</h2>
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

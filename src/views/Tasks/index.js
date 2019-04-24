import React, { useState } from 'react';

import { connect } from 'react-redux';

import CardTask from '../../components/CardTask';
import AddForm from '../../components/AddForm';

import { bindActionCreators } from 'redux';

import * as ProjectActions from '../../store/actions/projects';

const Tasks = ({
  filteredProject,
  tasksAdd,
  projectSetTime,
  taskSetTime,
  projects
}) => {
  const [taskState, setTaskState] = useState(null);

  const [show, setShow] = useState(false);

  var title = '';
  var desc = '';

  function handleTitle(value) {
    title = value;
  }

  function handleDesc(value) {
    desc = value;
  }

  function addProject(e) {
    e.preventDefault();
    let id = filteredProject[0].tasks.length;
    tasksAdd(
      {
        id: id,
        title: title,
        description: desc,
        time: 0,
        tasks: []
      },
      filteredProject[0].id
    );
    setShow(!show);
  }

  function handleTask(task, time, id) {
    setTaskState(task);
    projectSetTime(time, filteredProject[0].id);
    taskSetTime(time, filteredProject[0].id, id);
  }

  return (
    <div className="container ">
      <h2 className="text-center mt-5 mb-5">Tarefas</h2>
      <div className="text-center mt-3 mb-3">
        <button
          className={`btn ${!show ? 'btn-success' : 'btn-danger'}`}
          onClick={() => setShow(!show)}
        >
          {!show ? 'Adicionar tarefa' : 'Fechar'}
        </button>
      </div>
      <AddForm
        show={show}
        props={{ title: 'Adicionar projeto' }}
        handleTitle={e => handleTitle(e)}
        handleDesc={e => handleDesc(e)}
        send={e => addProject(e)}
      />
      <h2 className="text-center text-primary">
        Quantidade total de horas trabalhadas:{' '}
        {projects[filteredProject[0].id].time} horas
      </h2>
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
                filterTask={(data, time) => handleTask(data, time, task.id)}
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
  projects: state.projects.projects,
  filteredProject: state.projects.filteredProject
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

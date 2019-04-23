import React, { useState } from 'react';
import './style.css';

import Card from '../../components/Card';
import AddForm from '../../components/AddForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ProjectActions from '../../store/actions/projects';

const Home = ({ history, projects, filterProject }) => {
  const [show, setShow] = useState(false);

  function handleFilterProject(id) {
    filterProject(id);
    history.push(`/${id}`);
  }
  return (
    <div className="container ">
      <h2 className="text-center mt-5 mb-2">Projetos</h2>
      <div className="text-center mt-3 mb-3">
        <button className="btn btn-success" onClick={() => setShow(!show)}>
          Adicionar projeto
        </button>
      </div>
      <AddForm show={show} props={{ title: 'Adicionar projeto' }} />
      <div className="row">
        {projects.map(data => (
          <Card
            key={data.id}
            props={data}
            filterProject={id => handleFilterProject(id)}
          />
        ))}
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
)(Home);

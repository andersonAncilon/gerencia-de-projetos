import React from 'react';

const Card = ({ props, filterProject }) => {
  function handleClick() {
    filterProject(props.id);
  }

  return (
    <div className="col-md-4">
      <div className="card mb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Título: {props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Tempo total gasto: {props.time} horas
          </h6>
          <p className="card-text">Descrição: {props.description}</p>
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Abrir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

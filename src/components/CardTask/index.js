import React, { useState } from 'react';

const CardTask = ({ props, filterTask }) => {
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(0.0);

  var initialTime = new Date();

  function handleInit(task) {
    setStarted(true);
    initialTime = new Date();
    filterTask(task);
  }

  function handleStop() {
    setStarted(false);
    const finalTime = new Date();

    let diff = Math.round(
      (finalTime.getTime() - initialTime.getTime()) / 60000
    );

    let totalTime = timer;

    setTimer(diff + totalTime);

    filterTask(null);
  }

  return (
    <div key={props.id} className="col-md-4">
      <div className="card mb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Título: {props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Tempo total gasto: {timer} minutos | {(timer / 60).toFixed(1)} horas
          </h6>
          <p className="card-text">Descrição: {props.description}</p>
          <button
            className="btn btn-primary"
            disabled={started ? true : false}
            onClick={() => handleInit(props)}
          >
            Iniciar tarefa
          </button>
          <button
            className=" ml-2 btn btn-success"
            disabled={started ? false : true}
            onClick={() => handleStop()}
          >
            Pausar tarefa
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTask;

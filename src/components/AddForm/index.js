import React from 'react';

const AddForm = ({ props, show }) => {
  return (
    <form className="col-md-6 mx-auto border mt-3 mb-3" hidden={!show}>
      <h2 className="text-success text-center">{props.title}</h2>
      <div className="form-group">
        <label>Titulo</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Digite seu e-mail"
        />
      </div>
      <div className="form-group">
        <label>Descrição</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Digite sua senha"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Inserir</button>
      </div>
    </form>
  );
};

export default AddForm;

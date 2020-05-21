import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      resposable: "",
      descripcion: "",
      priority: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    console.log("Guardando....");
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Titulo"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Responsable"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Descripción"
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              name="priority"
              onChange={this.handleInput}
            >
              <option>low</option>
              <option>high</option>
              <option>medio</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;

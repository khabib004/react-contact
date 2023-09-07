import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export class TodoItem extends Component {
  render() {
    const { id, name, nik, category, date, done, no, doneTodo } = this.props;
    return (
      <Alert
        variant={"info"}
      >
        <span className="card-span">
          <h3>{no}.</h3>
          <h1>{name}</h1>
          <h4>{nik}</h4>
          <a href="https://t.me/norboyev_oo4">({date})</a>
          <p>
          ({category})
          </p>

        </span>

        {done ? (
          <span>✅</span>
        ) : (
          <div>
            <button className="btn btn-primary me-3">Edit {id}</button>
            <button className="btn btn-success" onClick={() => doneTodo(id)}>
              Done
            </button>
          </div>
        )}
      </Alert>
    );
  }
}

export default TodoItem;

import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { categories } from "../data/categories";

export class TodoForm extends Component {
  render() {
    const { submit, handeTodo, todo } = this.props;
    return (
      <Form onSubmit={submit} className="w-50 mt-5 mx-auto form-contact" >
        <Row>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label> Firstname</Form.Label>
            <Form.Control
              value={todo.name}
              onChange={handeTodo}
              required
              type="text"
              placeholder="Firstname"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="nik">
            <Form.Label> Lastname</Form.Label>
            <Form.Control
              value={todo.nik}
              onChange={handeTodo}
              required
              type="text"
              placeholder="Lastname"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md={6} controlId="date">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={todo.number}
              onChange={handeTodo}
              required
              type="number"
              placeholder="number"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md={6} controlId="category">
            <Form.Label>Contact category</Form.Label>
            <Form.Select value={todo.category} onChange={handeTodo}>
              {categories.map( ( category ) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ) )}
            </Form.Select>
          </Form.Group>
        </Row>
        <Button className="button" type="submit">
          <span class="button__text">Add Contact</span>
          <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
        </Button>
      </Form>
    );
  }
}

export default TodoForm;

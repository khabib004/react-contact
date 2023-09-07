import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import TodoForm from "../components/ContactForm";
import TodoItem from "../components/ContactItem";
import TodoFilter from "../components/ContactFilter";

export class HomePage extends Component {
  state = {
    todos: [
      {
        id: 0,
        name: "Playing football",
        nik: "Cristiano Ronaldo",
        date:"+998910770918",
        category: "friends",
        done: false,
      },
      {
        id: 1,
        name: "Reading book",
        nik: "Kid Laroi",
        date: "04-09-2023",
        category: "relatives",
        done: false,
      },
      {
        id: 2,
        name: "Reading book",
        nik: "Ivan Grozi",
        date: "04-09-2023",
        category: "relatives",
        done: false,
      },
    ],
    todo: {
      name: "",
      date: "",
      nik: "",
      category: "select - family",
    },
    search: "",
    category: "all",
  };
  render() {
    let { todos, search, category, todo } = this.state;
    todos = todos.filter((todo) => todo.name.toLowerCase().includes(search));

    if (category !== "all") {
      todos = todos.filter((todo) => todo.category === category);
    }

    const doneTodos = todos.filter((todo) => todo.done);
    const undoneTodos = todos.filter((todo) => !todo.done);

    const handleSearch = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
    };

    const handleCategory = (e) => {
      this.setState({ category: e.target.value });
    };

    const submit = (e) => {
      e.preventDefault();
      let newTodos = [...todos, { ...todo, done: false, id: Date.now() }];
      this.setState({
        todos: newTodos,
        todo: { name: "", date: "", nik: "", category: "A" },
      });
    };

    const handleTodo = (e) => {
      let newTodo = { ...todo, [e.target.id]: e.target.value };
      this.setState({ todo: newTodo });
    };

    const doneTodo = (id) => {
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      });
      this.setState({ todos: newTodos });
    };

    return (
      <Container>
        <TodoForm todo={todo} submit={submit} handeTodo={handleTodo} />
        <TodoFilter
          handleCategory={handleCategory}
          category={category}
          search={search}
          handleSearch={handleSearch}
        />
        <Tabs defaultActiveKey="all" variant="pills" className="my-3" justify>
          <Tab eventKey="all" title="All Contact">
            {todos.map((todo, i) => (
              <TodoItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="undone" title="Undone Contact">
            {undoneTodos.map((todo, i) => (
              <TodoItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="done" title="Done Contact">
            {doneTodos.map((todo, i) => (
              <TodoItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default HomePage;

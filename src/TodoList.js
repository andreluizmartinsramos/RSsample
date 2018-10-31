import React, { Fragment } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    {todos.loading && <p>Carregando</p>}
    <ul>
      {todos.data.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>
    <input type="text" ref={el => (this.input = el)} />
    <button
      onClick={() => {
        addTodo(this.input.value);
        this.input.value = "";
      }}
    >
      Add toDo
    </button>
    <Footer />
  </Fragment>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

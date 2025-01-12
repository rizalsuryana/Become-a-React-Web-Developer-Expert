import { useSelector, useDispatch } from 'react-redux';
import { addTodoActionCreator, asyncaddTodo, asyncDeleteTodo, asyncReceiveTodos, asyncToggleTodo, deleteTodoActionCreator, toggleTodoActionCreator} from '../states/todos/action';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { useEffect } from 'react';

const TodoList = () => {
  const todos = useSelector((states) => states.todos); // TODO: Get todos from store;
  const dispatch = useDispatch();


  // API
  useEffect (() => {
    dispatch(asyncReceiveTodos());
  }, [dispatch]);

  const onAddTodo = (text) => {
    // TODO: dispatch action ADD_TODO
    // const id = `todo-${+new Date()}`;
    // dispatch(
    //   addTodoActionCreator({
    //     id,
    //     text
    //   })
    // );
    dispatch(asyncaddTodo(text));
  }

  const onToggleTodo = (id) => {
    // TODO: dispatch action TOGGLE_TODO
    dispatch(asyncToggleTodo(id));
  }

  const onDeleteTodo = (id) => {
    // TODO: dispatch action DELETE_TODO
    dispatch(asyncDeleteTodo(id));
  }

  return (
<div className="todos-goals-container">
  <h3>My Todos</h3>
  <div className="todos-goals-input-container">
    <TodoInput addTodo={onAddTodo} />
  </div>
  <ul>
    {todos.map((todo) => (
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <TodoItem {...todo} toggleTodo={onToggleTodo} deleteTodo={onDeleteTodo} />
      </li>
    ))}
  </ul>
</div>

  );
}

export default TodoList;
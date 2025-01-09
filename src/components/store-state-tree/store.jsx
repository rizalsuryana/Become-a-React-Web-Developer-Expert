/**
* Application code
*/
import { createStore } from './redux';

function addTodoActionCreator({ id, text }) {
  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      complete: false
    }
  };
}

function deleteTodoActionCreator(id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  };
}

function todosReducer(todos = [], action = {}) {
  if (action.type === 'ADD_TODO') {
    return [...todos, action.payload];
  }

  if (action.type === 'DELETE_TODO') {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  return todos;
}

const store = createStore(todosReducer);

store.subscribe(() => {
  console.log('state changed!', store.getState());
});

store.dispatch(
  addTodoActionCreator({
    id: 1,
    text: 'Learn React'
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 2,
    text: 'Learn Redux'
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 3,
    text: 'Learn JavaScript'
  })
);

// menghapus todo dengan id 3
store.dispatch(deleteTodoActionCreator(3));

const Store = () => {
    return(
        <>
        <p>
            please ceck the console
        </p>
        </>
    )
}

export default Store;
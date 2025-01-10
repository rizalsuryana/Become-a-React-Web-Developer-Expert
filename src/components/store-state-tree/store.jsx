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

const addGoalActionCreator = ({id, text}) => {
  return {
    type : 'ADD_GOAL',
    payload: {
      id,
      text
    }
  };
}

const deleteGoalActionCreator = (id) => {
  return {
    payload: {
      id
    }
  };
}


const goalReducer = (goals = [], action = {}) => {
  if (action.type === 'ADD_GOAL') {
    return [... goals, action.payload];
  }

  if (action === 'DELETE_GOAL') {
    return goals.filter((goal)=> goal.id !== action.payload.id);
  }

  return goals;
}


// Root reducer

const rootReducer = (state = {}, action= {}) => {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalReducer(state.goals, action)
  };
}


const store = createStore(rootReducer);

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
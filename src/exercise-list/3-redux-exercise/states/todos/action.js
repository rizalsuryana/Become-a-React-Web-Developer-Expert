import mockAPI from "../../data/mockAPI";

const ActionType = {
  ADD_TODO    : 'ADD_TODO',
  DELETE_TODO : 'DELETE_TODO',
  TOGGLE_TODO : 'TOGGLE_TODO',
  RECEIVE_TODOS : 'RECEIVE_TODOS'
};



const addTodoActionCreator = ({ id, text }) => {
    return {
      type: ActionType.ADD_TODO,
      payload: {
        id,
        text,
        complete: false
      }
    };
  }
  
  const  deleteTodoActionCreator = (id) => {
    return {
      type: ActionType.DELETE_TODO,
      payload: {
        id
      }
    };
  }

const toggleTodoActionCreator = (id) => {
    return {
        type: ActionType.TOGGLE_TODO,
        payload: {
          id
        }
    };
}

// new for api

const receiveTodosActionCreator = (todos) => {
  return{
    type: ActionType.RECEIVE_TODOS,
    payload: {
      todos
    }
  };
}

const asyncReceiveTodos = () => {
  return async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(receiveTodosActionCreator(todos));
  }
}

const asyncaddTodo = (text) => {
  return async (dispatch) => {
    const {id} = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
}

const asyncDeleteTodo = (id) => {
  return async (dispatch) => {
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator(id));
  };
}

const asyncToggleTodo = (id) => {
  return async (dispatch) => {
    // await mockAPI.toggleTodo(id); cause lagging check box toggle
    dispatch(toggleTodoActionCreator(id));

    try{
      await mockAPI.toggleTodo(id);
    } catch(error){
      alert(error.message);

      // rollback state change with re-toggling the todo item
    }
    
  }
}



  export {
        addTodoActionCreator,
        deleteTodoActionCreator,
        toggleTodoActionCreator,
        receiveTodosActionCreator,
        asyncReceiveTodos,
        asyncaddTodo,
        asyncDeleteTodo,
        asyncToggleTodo,
        ActionType
        }
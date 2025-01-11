import { goalReducer } from "./goals/reducer";
import { todosReducer } from "./todos/reducer";

const rootReducer = (state = {}, action= {}) => {
    return {
      todos: todosReducer(state.todos, action),
      goals: goalReducer(state.goals, action)
    };
  }

  export default rootReducer;
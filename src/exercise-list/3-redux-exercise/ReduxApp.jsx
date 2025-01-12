import GoalList from "./redux-components/GoalList";
import TodoList from "./redux-components/TodoList";
 
function ReduxApp() {
 return (
<div className="app-container">
      <div className="todos-goals-wrapper">
        <TodoList />
        <GoalList />
      </div>
    </div>
 );
}
 
export default ReduxApp;
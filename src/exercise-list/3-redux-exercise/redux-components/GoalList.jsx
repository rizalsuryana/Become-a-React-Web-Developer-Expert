import { useSelector, useDispatch } from "react-redux";
import {addGoalActionCreator, deleteGoalActionCreator} from '../states/goals/action'
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

const GoalList = () => {
  const goals = useSelector((states)=> states.goals); //TODO: get goals from store
  const dispatch = useDispatch();

  const onAddGoal = (text) => {
    //TODO: dispatch action ADD_GOAL
    const id = `goal-${+new Date()}`;
    dispatch(
      addGoalActionCreator({
        id,
        text
      })
    );
  }

    const onDeleteGoal = (id) => {
      //TODO: dispatch action DELETE_GOAL
      dispatch(deleteGoalActionCreator(id));
  }

  return(
    <div className="todos-goals-container">
  <h3>My Goals</h3>
  <div className="todos-goals-input-container">
    <GoalInput addGoal={onAddGoal} />
  </div>
  <ul>
    {goals.map((goal) => (
      <li key={goal.id}>
        <GoalItem {...goal} deleteGoal={onDeleteGoal} />
      </li>
    ))}
  </ul>
</div>


  )
}

export default GoalList;


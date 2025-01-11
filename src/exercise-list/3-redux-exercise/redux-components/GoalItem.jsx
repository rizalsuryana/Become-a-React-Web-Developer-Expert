const GoalItem = ({id, text, deleteGoal}) => {
  return(
    <div>
      <span>{text}</span>
      <button onClick={()=> deleteGoal(id)}>X</button>
    </div>
  )
}

export default GoalItem;
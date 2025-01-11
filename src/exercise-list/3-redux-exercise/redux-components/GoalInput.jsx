import { useState } from "react";

const GoalInput = ({addGoal}) => {
  const [text, setText] = useState('');

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <div>
      <input type="text" value={text} onChange={onTextChangeHandler} />
      <button onClick={()=> addGoal(text)}>Add Goal</button>
    </div>
  )
}

export default GoalInput;
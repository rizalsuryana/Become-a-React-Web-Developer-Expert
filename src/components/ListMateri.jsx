import { Link } from "react-router-dom";

const ListMateri = () => {
  return (
    <div className="list-materi">
      <h2>List of Exercises</h2>
      <ul>
        <li className="item-materi">
          <Link to="/counterapp">Counter App</Link>
          <p>Applying ESLint to ensure code quality and catch potential errors</p>
        </li>
        <li className="item-materi">
          <Link to="/stopwatchapp">Stopwatch App</Link>
          <p>Using React Strict Mode for better error detection during development</p>
        </li>
        <li className="item-materi">
          <Link to="/redux">Redux</Link>
          <p>Learning React Redux for state management</p>
        </li>
        <li className="item-materi">
          <a href="https://rizal-open-space.vercel.app/" target="_blank" rel="noopener noreferrer">
            Open Space: A Twitter-Like Social Media App
          </a>
          <p>Real World Project: Implementing Redux in a Social Media App (Twitter-Like)</p>
        </li>
        <li className="item-materi">
          <a href="https://rizal-discusser.vercel.app/" target="_blank" rel="noopener noreferrer">
            Discusser: Discussion Forum App
          </a>
          <p>Project to Become a React-Web Developer Expert: <br/> 
          Real case to Implementing Redux in a project application </p>
        </li>
      </ul>
    </div>
    
  );
};

export default ListMateri;

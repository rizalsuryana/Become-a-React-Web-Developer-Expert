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
    </ul>
    </div>
);
};

export default ListMateri;

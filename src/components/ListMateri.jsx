import { Link } from "react-router-dom";

const ListMateri = () => {
    return(
        <div className="list-materi">
        <h2>Exercise List materi</h2>
        <ul>
            <li className="item-materi">
                <Link to='/counterapp'>Counter App</Link>
                <p>Applying eslint to the generated code</p>
            </li>
            <li className="item-materi">
                <Link to='/stopwatchapp'>StopWatch Appp</Link>
                <p>
                    Applying React StrichMode
                </p>
            </li>
            <li className="item-materi">
                <Link to='/store'>Store</Link>
                <p>
                    react redux
                </p>
            </li>
        </ul>
        </div>
    );

}

export default ListMateri;
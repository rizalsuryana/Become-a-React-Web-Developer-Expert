import { Link } from "react-router-dom";

const ListMateri = () => {
    return(
        <>
        <h2>Exercise List materi</h2>
        <ul>
            <li>
                <Link to='/counterapp'>Counter App</Link>
                <p>Applying eslint to the generated code</p>
            </li>
            <li>
                <Link to='/stopwatchapp'>StopWatch Appp</Link>
                <p>
                    Applying React StrichMode
                </p>
            </li>
        </ul>
        </>
    );

}

export default ListMateri;
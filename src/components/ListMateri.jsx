import { Link } from "react-router-dom";

const ListMateri = () => {
    return(
        <>
        <h2>Exercise List materi</h2>
        <ul>
            <li>
                <Link to='/counterapp'>CounterApp</Link>
                <p>Applying eslint to the generated code</p>
            </li>
        </ul>
        </>
    );

}

export default ListMateri;
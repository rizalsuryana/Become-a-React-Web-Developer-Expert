import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <>
        <h2>Navigation</h2>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
        <p>
            Coming soon...
        </p>
        </>
    );
}

export default Navigation
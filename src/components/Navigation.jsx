import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

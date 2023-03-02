import { Link } from "react-router-dom";
//import Nav from 'react-bootstrap/Nav';
//import NavBar from 'react-bootstrap/Navbar';
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="addmovie">Add Movie</Link>
                </li>
            </ul>
        </nav>

    );
}

export default NavBar;
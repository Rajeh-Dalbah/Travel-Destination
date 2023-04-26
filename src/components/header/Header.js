import "./Header.css";
import {Link} from 'react-router-dom';
function Header(props){
    return(
    <>
        <h1 className="header">Travel Destination</h1>
        <nav>
        <Link to="/">Home</Link>
        </nav>
    </>
)}

export default Header;
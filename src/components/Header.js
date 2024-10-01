import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons"

import logo from "../assets/logo.jpg"

const Header = () => {
    return (
        <header>
            <FontAwesomeIcon icon={faBars} className="icon" />
            <img src={logo} alt="logo" className="logo" />
            <input type="text" className="search" placeholder="Type to search" />
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
        </header>
    )
}

export default Header
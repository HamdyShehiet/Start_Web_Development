import { useState } from "react";
import { Link } from "react-router";

function Header(){
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <header>
            <div className="container">
                <div className="logo i-flex"><img src="./src/assets/icons/logo.webp" width="55" alt="Logo Icon" /><Link  to="/">Start</Link></div>
                <nav>
                    <img onClick={()=> setToggleMenu(!toggleMenu)} src="./src/assets/icons/menu.webp" alt="Menu Icon" id="menu-icon" className="menu-icon" />
                    <ul className={`${toggleMenu ? "menu" : "" }`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header ;
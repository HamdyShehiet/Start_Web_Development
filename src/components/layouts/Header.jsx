import { useState } from "react";
import { Link } from "react-router";

function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);
    function hidden(){
        setToggleMenu(false);
    }
    return (
        <header>
            <div className="container">
                <div className="logo i-flex"><img src="/assets/icons/logo.webp" width="55" alt="Logo Icon" /><Link  to="/">Start</Link></div>
                <nav>
                    <img onClick={()=> setToggleMenu(!toggleMenu)} src="/assets/icons/menu.webp" alt="Menu Icon" id="menu-icon" className="menu-icon" />
                    <ul className={`${toggleMenu ? "menu" : "" }`}>
                        <li><Link onClick={hidden} to="/">Home</Link></li>
                        <li><Link onClick={hidden} to="/portfolio">Portfolio</Link></li>
                        <li><Link onClick={hidden} to="/services">Services</Link></li>
                        <li><Link onClick={hidden} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;
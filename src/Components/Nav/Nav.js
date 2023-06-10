import React, {useState} from 'react'
import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import './Nav.css'
import Welcome from '../Welcome/Welcome'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'


    function Nav() {

        const [click, setClick] = useState(false);

        const handleClick = () => setClick(!click);
        const closeMenu = () => setClick(false);

        return(
            <BrowserRouter>
                <nav className="navbar navigation topnav">
                    <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/Welcome" className="nav-links link" onClick={closeMenu}>
                            Welcome
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" className="nav-links link" onClick={closeMenu}>
                            About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Projects" className="nav-links link" onClick={closeMenu}>
                            Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contact" className="nav-links link" onClick={closeMenu}>
                            Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Route exact path='/Work' component={Welcome}/>
                <Route exact path='/About' component={About}/>
                <Route exact path='/Projects' component={Projects}/>
                <Route exact path='/Contact' component={Contact}/>
            </BrowserRouter>
        )
}


export default Nav


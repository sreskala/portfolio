import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';

//components
import Dropdown from '../Dropdown/Dropdown';
import Burger from 'react-css-burger';

//styles
import './navbar-styles.scss';

//images
import logo from '../../assets/logo.png';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [navbar, setNavbar] = useState(false);
    //const[active, setActive] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    //const burgerClick = () => setActive(!active);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeBackground);

    return (
        <Fragment>
            <nav className={`navbar ${navbar ? 'active' : ''}`}>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="logo"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <Burger
                    onClick={closeMobileMenu}
                    active={click ? true : false}
                    burger="spin"
                    color="white"
                    hoverOpacity={0.8}
                    scale={1} 
                    />
                    {/* <i
                        className={click
                        ? 'fas fa-times'
                        : 'fas fa-bars'}/> */}
                </div>
                <ul
                    className={`nav-menu ${click
                    ? 'active'
                    : ''}`}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/portfolio' className="nav-links" onClick={closeMobileMenu}>
                            Portfolio <i className='fas fa-caret-down' />
                            {dropdown && <Dropdown />}
                        </Link>
                    </li>
                </ul>
                
            </nav>
        </Fragment>
    );
}

export default Navbar;
import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';

//components
import Dropdown from '../Dropdown/Dropdown';
import Burger from 'react-css-burger';

//styles
import './navbar-styles.scss';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
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

    return (
        <Fragment>
            <nav className="navbar">
                <Link to='/' className='navbar-logo'>
                    SAM
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <Burger
                    onClick={closeMobileMenu}
                    active={click ? true : false}
                    burger="spin"
                    color="white"
                    hoverOpacity={0.8}
                    scale={1.2} 
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
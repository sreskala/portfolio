import React, {useState} from 'react';
import {Link} from 'react-router-dom';

//project items
import {projectItems} from '../../data/projectItems';

//styles
import './dropdown-styles.scss';

const Dropdown = () => {

    const [click,
        setClick] = useState(false);

    const handleClick = () => setClick(!click);
    

    return (
        <div>
            <ul
                onClick={handleClick}
                className={click
                ? 'dropdown-menu clicked'
                : 'dropdown-menu'}>
                {projectItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Dropdown;
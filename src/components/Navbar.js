import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/home'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/add-article'}>Add Article</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/add-category'}>Add Category</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>

    )
}

export default Navbar;
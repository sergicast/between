import React from "react";
import { Link } from 'react-router-dom';

import './SideMenu.scss'

/**
 * @component Left Menu with Exercies links.
 * @returns {React.ReactElement}
 */
export const SideMenu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/exercise-one">Exercise 1</Link></li>
                <li><Link to="/exercise-two">Exercise 2</Link></li>
            </ul>
        </nav>
    );
};

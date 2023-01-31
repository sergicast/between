import React from 'react';
import './Header.scss'

import betweenLogo from '../../assets/img/logo-between.svg';
import mangoLogo from '../../assets/img/logo-mango.svg';



export const Header = () => {
    return (
        <header>
            <img src={betweenLogo} alt='between-logo' />
            <img src={mangoLogo} alt='mango-logo' />
        </header>
    );
};

import React from "react";
import './styles.scss';
import { Header, SideMenu } from '../../components'

/**
 * @component Distribution page.
 * @param {Component} children 
 * @returns {React.ReactElement}
 */
export const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header /> 
            <SideMenu />   
            <main>{children}</main> 
        </div>
    );
};

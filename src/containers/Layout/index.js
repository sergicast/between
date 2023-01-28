import React from "react";
import './styles.scss';
import { Header, SideMenu } from '../../components'

export const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header /> 
            <SideMenu />   
            <main>{children}</main> 
        </div>
    );
};

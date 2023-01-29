import React from "react";
import { Layout } from './containers/Layout';
import MainRoutes from './routes';


export const App = () => {
    return (
        <Layout>
            <MainRoutes />
        </Layout>
    );
};

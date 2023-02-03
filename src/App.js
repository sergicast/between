import { Layout } from './containers/Layout';
import MainRoutes from './routes';

/**
 * @component Layout and routes.
 * @returns {React.ReactElement}
 */
export const App = () => {
    return (
        <Layout>
            <MainRoutes />
        </Layout>
    );
};

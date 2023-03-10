import './Header.scss';

import betweenLogo from '../../assets/img/logo-between.svg';
import mangoLogo from '../../assets/img/logo-mango.svg';

/**
 * @component Header of the page.
 * @returns {React.ReactElement}
 */
export const Header = () => {
    return (
        <header data-testid='header'>
            <img src={betweenLogo} alt='between logo' />
            <img src={mangoLogo} alt='mango logo' />
        </header>
    );
};

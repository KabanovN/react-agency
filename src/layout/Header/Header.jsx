import NavBar from '../../components/NavBar/NavBar';
import Logo from '../../components/Logo/Logo';

import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='header__section-top'>
                    <Logo />
                    <NavBar />
                    <div className='header__contact'>
                        <a href='!#' className='header__btn btn'>
                            Contact
                        </a>
                    </div>
                </div>
                <div className='header__section-bottom'>
                    <h1 className='header__title'>Portfolio</h1>
                    <p className='header__descr'>
                        Agency provides a full service range including technical
                        skills, design, business understanding.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;

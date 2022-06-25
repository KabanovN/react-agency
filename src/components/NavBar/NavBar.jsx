import './NavBar.css';

const NavBar = () => {
    const navItems = ['About', 'Services', 'Pricing', 'Blog'];

    return (
        <nav className='header__nav'>
            <ul className='nav__list'>
                {navItems.map((item, index) => {
                    return (
                        <li className='nav__item' key={index}>
                            <a className='nav__link' href='!#'>
                                {item}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;

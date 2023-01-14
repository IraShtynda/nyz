import { NavLink } from "react-router-dom";
import './Header.scss';
import { useState } from 'react';
import logo from './logo.png';

const Header = () => {
    const [burger_class, setBurgerClass] = useState("burger-menu-item unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-menu-item clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-menu-item unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <img className="header__logo-img" src={logo} alt='logo' />
                    <span>NYZ Productions </span>
                </div>
                <nav className="header__menu">
                    <ul className={menu_class}>
                        <li><NavLink className="menu-item" activeClassName="active" to='*'>Home</NavLink></li>
                        <li><NavLink className="menu-item" activeClassName="active" to='/artists'>Artists</NavLink></li>
                        <li><NavLink className="menu-item" activeClassName="active" to='/news'>News</NavLink></li>
                        <li><NavLink className="menu-item" activeClassName="active" to='/contacts'>Contacts</NavLink></li>
                    </ul>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
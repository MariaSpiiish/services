import './Header.css';
import logo from "../../images/logo.png";
import menuButton from "../../images/menu-button.png";

function Header() {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="Логотип компании Digital Agency" />
        <nav className='header__menu'>
            <img className='header__menuButton' src={menuButton} alt="Кнопка меню" />
        </nav>
    </header>
  )
}

export default Header
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css';
import logo from '../../images/logo.png';
import facebook from '../../images/f.png';
import google from '../../images/g.png';
import twitter from '../../images/t.png';
import pin from '../../images/pin.png';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__logo'>
            <img className='footer__logo-icon' src={logo} alt="Логотип компании Digital Agency" />
        </div>

        <div className='footer__text-container'>
            <p className='footer__text'>Мы хотели бы услышать все о вашем проекте.</p>
            <p className='footer__text'>Свяжитесь с нами. </p>
        </div>

        <nav className='footer__social-links-container'>
            <a className='footer__social-link' href='#'>
                <img className='footer__social-link opacity' src={facebook} alt="Иконка Facebook" />
            </a>
            <a className='footer__social-link' href='#'>
            <img className='footer__social-link opacity' src={google} alt="Иконка Google" />
            </a>
            <a className='footer__social-link' href='#'>
                <img className='footer__social-link opacity' src={twitter} alt="Иконка Twitter" />
            </a>
            <a className='footer__social-link' href='#'>
                <img className='footer__social-link opacity' src={pin} alt="Иконка Pinterest" />
            </a>
        </nav>

        <div className='footer__columns-container'>
            <div className='footer__column'>
                <h3 className='footer__column-title'>КОНТАКТЫ</h3>
                <address className='footer__column-content'>
                    <p className='footer__column-text'>+80 555 55 66</p>
                    <a className='footer__column-text' href='mailto:digi@gmail.com'>digi@gmail.com</a>
                </address>
            </div>

            <div className='footer__column'>
                <h3 className='footer__column-title'>АДРЕС</h3>
                <address className='footer__column-content'>
                    <p className='footer__column-text'>Пр. Науки 107</p>
                    <p className='footer__column-text'>Киев / Украина</p>
                </address>
            </div>

            <nav className='footer__column'>
                <h3 className='footer__column-title'>ПОМОЩЬ</h3>
                <ul className='footer__column-list'>
                    <li className='footer__column-list-item opacity'><a href="#contact">Как с нами связаться?</a></li>
                    <li className='footer__column-list-item opacity'><a href="#digital">Что такое диджитал?</a></li>
                    <li className='footer__column-list-item opacity'><a href="#pricing">Стоимость услуг</a></li>
                </ul>
            </nav>

            <nav className='footer__column'>
                <h3 className='footer__column-title'>МЕНЮ</h3>
                <ul className='footer__column-list'>
                    <li className='footer__column-list-item opacity'><a href="#projects">Наши проекты</a></li>
                    <li className='footer__column-list-item opacity'><a href="#team">Команда</a></li>
                    <li className='footer__column-list-item opacity'><a href="#blog">Блог</a></li>
                </ul>
            </nav>

        </div>


        

    </footer>
  )
}

export default Footer
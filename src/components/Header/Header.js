import './Header.css';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {

  function handleOpenLoginClick() {
    props.handleOpenPopupLogin();
  };


  return (
      <header className="header">
        <Link to='/'><img className="logo"  src={logo} alt="Логотип"/></Link>
        <input className='search-input' type='search' id='header-search' name='header-search' placeholder="Поиск" minLength="1" maxLength="40"></input>
        <Link to='/randomcoffee' className='button__freeCoffee' type='button'></Link>
        <button className='button__login' type='button' onClick={handleOpenLoginClick} >Войти</button>
      </header>
  );
}

export default Header;

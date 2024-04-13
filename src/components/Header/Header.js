import './Header.css';
import logo from './../../images/logo.svg';
// import coffee from './../../images/coffee.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="header">
        <Link to='/'><img className="logo"  src={logo} alt="Логотип"/></Link>
        <input className='search-input' type='search' id='header-search' name='header-search' placeholder="Поиск" minLength="1" maxLength="40"></input>
        <Link to='/randomcoffee' className='button__freeCoffee' type='button'></Link>
        <button className='button__login' type='button'>Войти</button>
        {/* <Link className='' />
        <Link className='' /> */}
      </header>
  );
}

export default Header;

import './Promo.css';
// import logo from './../../images/logo.svg';
// import coffee from './../../images/coffee.svg';
import { Link } from 'react-router-dom';

function Promo() {
  return (
      <section className="promo">
        <div className="slider">
          <div className="slider-list">
            <div className="slider-track">
                <Link to='/event' className="slide first-slide">
                  <div className='slide__info'>
                    <p className='slide__header'>Митап HR Tech</p>
                    <p className='slide__text'>Рассмотрим опыт сразу нескольких крупных компаний в области HR Tech</p>
                  </div>
                  <li className='list-teg'>
                    <ul className='list-teg__item'>Москва</ul>
                    <ul className='list-teg__item'>24.03.24</ul>
                  </li>
                </Link>
              <div className="slide"></div>
              <div className="slide"></div>
              <div className="slide"></div>
            </div>
          </div>
          <div className="slider-arrows">
            <button type="button" className=""></button>
            <button type="button" className="secind-slide"></button>
            <button type="button" className="third-slide"></button>
            <button type="button" className="fourth-slide"></button>
          </div>
        </div>
      </section>
  );
}

export default Promo;
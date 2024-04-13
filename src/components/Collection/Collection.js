import './Collection.css';
import one from './../../images/one-img.jpg';
// import coffee from './../../images/coffee.svg';
// import { Link } from 'react-router-dom';

function Collection() {
  return (
      <section className="collection">
        <h1 className='collection-header'>Подборки</h1>
        <div className='collection-container'>
          <ul className='collection-list list-first'>
            <li className='collection-list__item item-first'>
              <a className='item-link'>
                <h2 className='item-header item-header__weight'>Для разработчиков</h2>
                <p className='item-text'>24 мероприятия</p>
              </a>
            </li>
            <li className='collection-list__item item-two'>
              <a className='item-link'>
                <h2 className='item-header'>Топ-5 Data Science</h2>
              </a>
            </li>
            <li className='collection-list__item item-three'>
              <a className='item-link'>
                <h2 className='item-header'>Конференции</h2>
              </a>
            </li>
          </ul>
          <ul className='collection-list list-second'>
            <li className='collection-list__item item-four'>
              <a className='item-link'>
                <h2 className='item-header'>Ton-10 Маркетинг</h2>
              </a>
            </li>
            <li className='collection-list__item item-five'>
              <a className='item-link'>
                <h2 className='item-header'>Я.Субботник</h2>
              </a>
            </li>
            <li className='collection-list__item item-last'>
              <a className='item-link'>
                <h2 className='item-header item-header__weight'>Популярные мероприятия</h2>
                <p className='item-text'>15 мероприятий</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
  );
}

export default Collection;
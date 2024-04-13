import './Footer.css';

function Footer() {

  return (
      <footer className='footer'>
        <div className='footer-container'>
          <div className='list-container'>
            <div className='info-container'>
            <ul className='footer-list'>
              <li className='footer-list__item'><a className='footer-list__link' href='#'>Справка</a></li>
              <li className='footer-list__item'><a className='footer-list__link' href='#'>О компании</a></li>
              <li className='footer-list__item'><a className='footer-list__link' href='#'>Реклама</a></li>
              <li className='footer-list__item'><a className='footer-list__link' href='#'>Контакты</a></li>
            </ul>
            <ul className='footer-list'>
              <li className='footer-list__item'><a className='footer-list__link' href='#'>Партнерам и организаторам мероприятий</a></li>
              <li className='footer-list__item'><a className='footer-list__link' href='#'>Поддержка</a></li>
              <li className='footer-list__item'><a className='footer-list__link' href='#'>Часто задаваемые вопросы</a></li>
            </ul>

            </div>
          
            <ul className='footer-list list-social'>
              <li className='footer-list__link'><a className='item-tw' href='#'></a></li>
              <li className='footer-list__link'><a className='item-yt' href='#'></a></li>
              <li className='footer-list__link'><a className='item-tg' href='#'></a></li>
              <li className='footer-list__link'><a className='item-vk' href='#'></a></li>
            </ul>
          </div>
          <div className='footer-decoration'></div>
          <p className='footer-content'>Видеоматериалы доступны по лицензии CC BY-NC 3.0 с обязательным указанием: @ ООО «Яндекс»</p>
        </div>
      </footer>
  );
}

export default Footer;

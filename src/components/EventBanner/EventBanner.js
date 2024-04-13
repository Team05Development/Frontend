
import './EventBanner.css';
import img from './../../images/bg-promo.png';

function EventBanner(props) {

  

  return (
    <section className='event__banner-info'>
      <div className='event__card'>
        <div className='event-card__info'>
        <div className='event-card__info-container'>
          <div className='event-card__info-data'>
            <p className='event-card__info-text'>Москва</p>
            <p className='event-card__info-text'>Вт 24.03</p>
            <p className='event-card__info-text'>18:00</p>
          </div>
          <div className='event-card__reg-container'>
            <p className='event-card__reg-text'>Регистрация открыта</p>
            <div className='event-card__reg-color reg-on'></div>
          </div>
        </div>
        <button className='button__like like-off'></button>
        </div>
        <h2 className='event-card__header'>Митап HR Tech</h2>
        <p className='event-card__text'>Рассмотрим опыт сразу нескольких крупных компаний в области HR Tech</p>
        <button className='button__type_reg'>Зарегистрироваться</button>
      </div>
      <img width={785} height={600} src={img} border-radius={16} alt=''></img>
    </section>
  );
}

export default EventBanner;
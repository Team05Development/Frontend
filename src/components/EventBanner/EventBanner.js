
import './EventBanner.css';
import img from './../../images/bg-promo.png';

function EventBanner(props) {

  function getDateInfo(n) {
    let day = n.slice(8,);
    let mnth = n.slice(5,7);
    
    let data = ` ${day}.${mnth}`;

    return data
  }

  function getTimeInfo(n) {
    let time = n.slice(0,5);

    return time
  }

  return (
    <section className='event__banner-info'>
      <div className='event__card'>
        <div className='event-card__info'>
        <div className='event-card__info-container'>
          <div className='event-card__info-data'>
            <p className='event-card__info-text'>{props.card.city}</p>
            <p className='event-card__info-text'>{props.card.day_of_week + getDateInfo(props.card.date)}</p>
            <p className='event-card__info-text'>{getTimeInfo(props.card.time)}</p>
          </div>
          <div className='event-card__reg-container'>
            <p className='event-card__reg-text'>{ props.card.status.name }</p>
            <div className='event-card__reg-color reg-on'></div>
          </div>
        </div>
        <button className='button__like like-off'></button>
        </div>
        <h2 className='event-card__header'>{ props.card.title }</h2>
        <p className='event-card__text'>Рассмотрим опыт сразу нескольких крупных компаний в области HR Tech</p>
        <button className='button__type_reg'>Зарегистрироваться</button>
      </div>
      <img width={785} height={600} src={img} border-radius={16} alt=''></img>
    </section>
  );
}

export default EventBanner;
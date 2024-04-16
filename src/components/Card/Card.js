import './Card.css';

function Card(props) {


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

  function getColorRegister() {

    let classReg = '';

    if (props.card.status.id === 1) {
      classReg = 'reg-on';
    } else if (props.card.status.id === 2) {
      classReg = 'reg-off';
    } else if (props.card.status.id === 3) {
      classReg = 'reg-past';
    }

    return classReg
  }

  return (
    <div className={`card ${props.cardWeightSlim ? ' card-wight-slim' : ''}`}>
    <div className='card__info'>
      <img className={`card__image ${props.cardWeightSlim ? ' card-wight-slim' : ''}`} src={`http://158.160.154.62${props.card.image}`} alt={ props.card.title } intrinsicsize height={240}></img>
      <div className='card__info-container'>
        <p className='card__info-text'>{(props.card.format.id === 1 ? props.card.format.name : props.card.city )}</p>
        <div className='card__info-data'>
          <p className='card__info-text'>{props.card.day_of_week + getDateInfo(props.card.date)}</p>
          <p className='card__info-text'>{getTimeInfo(props.card.time)}</p>
        </div>
      </div>
      <button className='button__like like-off'></button>
    </div>
    <h2 className='card__header'>{ props.card.title }</h2>
    <div className='card__decoration'></div>
    <div className='card__reg-container'>
      <p className='card__text-reg'>{ props.card.status.name }</p>
      <div className={`card__reg-color ${getColorRegister()}`}></div>
    </div>
  </div>
  );
}

export default Card;
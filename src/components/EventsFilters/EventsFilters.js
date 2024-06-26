
import './EventsFilters.css';
import CardList from './../CardList/CardList';
import imgnotfound from './../../images/notfound.png'

function EventsFilters(props) {

  return (
    <section>
      {props.isTrueSearch ? (
        <div className='page-events'>
          <h1 className='filter-events__header'>Подходящие события</h1>
          <CardList eventsPage={props.eventsPage} cards={props.cardsByDate} />
        </div>
      ) : (
        <div className='notfound'>
          <div className='notfound__info'>
            <h2 className='notfound__header'>События не найдены</h2>
            <p className='notfound__text'>Попробуйте выбрать другие параметры или зарегистрируйтесь, чтобы получать новости об интересующих мероприятиях</p>
            <button className='notfound__button'>Зарегистрироваться</button>
          </div>
          <img className='notfound__image' alt='Картинка человечка' src={imgnotfound} ></img>
        </div>
      )}
    </section>
  );
}

export default EventsFilters;
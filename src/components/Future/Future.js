import './Future.css';
import CardList from './../CardList/CardList';

function Future(props) {

  const cardWeightSlim = true;
  const eventsPage = false;
  const route = '/events/future';

  return (
      <section className="future">
        <h1 className='future__header'>Будущие события</h1>
        <CardList cards={props.cards} cardWeightSlim={cardWeightSlim} eventsPage={eventsPage} route={route}/>
      </section>
  );
}

export default Future;
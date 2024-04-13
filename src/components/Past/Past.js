import './Past.css';
import CardList from './../CardList/CardList';

function Past(props) {

  const cardWeightSlim = true;
  const eventsPage = false;
  const route = '/events/past';

  return (
      <section className="past">
        <h1 className='past__header'>Прошедшие события</h1>
        <CardList cards={props.cards} cardWeightSlim={cardWeightSlim} eventsPage={eventsPage} route={route} />
      </section>
  );
}

export default Past;
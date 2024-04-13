import './Upcoming.css';
import CardList from './../CardList/CardList';

function Upcoming(props) {

  const uncomingEvents = true;
  const eventsPage = false;
  const route = '/events/upcoming';

  return (
      <section className="upcoming">
        <h1 className='upcoming__header'>События в ближайшие дни</h1>
        <CardList cards={props.cards} uncomingEvents={uncomingEvents} eventsPage={eventsPage} route={route}/>
      </section>
  );
}

export default Upcoming;

import './EventPageFilters.css';
import Header from './../Header/Header';
import Promo from './../Promo/Promo';
import Filters from './../Filters/Filters';
import Collection from './../Collection/Collection';
import Footer from './../Footer/Footer';
import EventsFilters from './../EventsFilters/EventsFilters';

function EventPageFilters(props) {

  const eventsPage = true;

  return (
    <section>
      <Header />
      <main>
        <Promo />
        <Filters />
        <EventsFilters eventsPage={eventsPage} cards={props.cards} />
        <Collection />
      </main>
      <Footer />
    </section>
  );
}

export default EventPageFilters;
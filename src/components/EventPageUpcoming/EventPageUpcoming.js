
import './EventPageUpcoming.css';
import Header from './../Header/Header';
import Promo from './../Promo/Promo';
import Filters from './../Filters/Filters';
import Collection from './../Collection/Collection';
import Footer from './../Footer/Footer';
import CardList from './../CardList/CardList';

function EventPageUpcoming(props) {

  const eventsPage = true;

  return (
    <section>
      <Header />
      <main>
        <Promo />
        <Filters />
        <CardList eventsPage={eventsPage} cards={props.cards} />
        <Collection />
      </main>
      <Footer />
    </section>
  );
}

export default EventPageUpcoming;
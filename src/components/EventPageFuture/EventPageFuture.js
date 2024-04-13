
import './EventPageFuture.css';
import Header from './../Header/Header';
import Promo from './../Promo/Promo';
import Filters from './../Filters/Filters';
import Collection from './../Collection/Collection';
import Footer from './../Footer/Footer';
import CardList from './../CardList/CardList';

function EventPageFuture(props) {

  const eventsPage = true;

  return (
    <section>
      <Header />
      <main>
        <Promo />
        <Filters />
        <h1 className='future__header'>Будущие события</h1>
        <CardList eventsPage={eventsPage} cards={props.cards} />
        <Collection />
      </main>
      <Footer />
    </section>
  );
}

export default EventPageFuture;
import './EventPageFuture.css';
import Header from './../Header/Header';
import Promo from './../Promo/Promo';
import Filters from './../Filters/Filters';
import Collection from './../Collection/Collection';
import Footer from './../Footer/Footer';
import CardList from './../CardList/CardList';
import { useLayoutEffect } from 'react';

function EventPageFuture(props) {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const eventsPage = true;

  return (
    <section>
      <Header handleOpenPopupLogin={props.handleOpenPopupLogin}/>
      <main>
        <Promo />
        <Filters />
        <div className='page-events'>
          <h1 className='future__header'>Будущие события</h1>
          <CardList eventsPage={eventsPage} cards={props.cards} />
        </div>
        <Collection />
      </main>
      <Footer />
    </section>
  );
}

export default EventPageFuture;
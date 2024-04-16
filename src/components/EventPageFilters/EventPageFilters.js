
import './EventPageFilters.css';
import Header from './../Header/Header';
import Promo from './../Promo/Promo';
import Filters from './../Filters/Filters';
import Collection from './../Collection/Collection';
import Footer from './../Footer/Footer';
import EventsFilters from './../EventsFilters/EventsFilters';
import { useLayoutEffect } from 'react';

function EventPageFilters(props) {

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
        <EventsFilters eventsPage={eventsPage} cardsByDate={props.cardsByDate} isTrueSearch={props.isTrueSearch} />
        <Collection />
      </main>
      <Footer />
    </section>
  );
}

export default EventPageFilters;
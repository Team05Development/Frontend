import './Event.css';
// import './../Card/Card.css';
import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Similar from './../Similar/Similar';
import EventBanner from './../EventBanner/EventBanner';
import EventSpikers from './../EventSpikers/EventSpikers';
import EventProgram from './../EventProgram/EventProgram';
import EventFaq from './../EventFaq/EventFaq';

function Event(props) {

  return (
    <section>
      <Header handleOpenPopupLogin={props.handleOpenPopupLogin}/>
      <section className='event-page'>
        <EventBanner card={props.oneCard} />
        <EventSpikers />
        <div className='event-about'>
          <h2 className='event-about__header'>О мероприятии</h2>
          <p className='event-about__text'>{props.oneCard.description}</p>
        </div>
        <EventProgram card={props.oneCard} />
        <EventFaq />
        <Similar cards={props.cards} />
      </section>
      <Footer />
    </section>
  );
}

export default Event;
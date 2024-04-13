
import './Event.css';
// import './../Card/Card.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Similar from './../Similar/Similar';
import EventBanner from './../EventBanner/EventBanner';
import EventSpikers from './../EventSpikers/EventSpikers';
import EventAbout from './../EventAbout/EventAbout';
import EventProgram from './../EventProgram/EventProgram';
import EventFaq from './../EventFaq/EventFaq';

function Event(props) {
  return (
    <section>
      <Header />
      <section className='event-page'>
        <EventBanner />
        <EventSpikers />
        <EventAbout />
        <EventProgram />
        <EventFaq />
        <Similar cards={props.cards} />
      </section>
      <Footer />
    </section>
  );
}

export default Event;
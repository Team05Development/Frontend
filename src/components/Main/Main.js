
import './Main.css';
import Header from './../Header/Header';
import Promo from './../Promo/Promo';
import Filters from './../Filters/Filters';
import Upcoming from './../Upcoming/Upcoming';
import Future from './../Future/Future';
import Collection from './../Collection/Collection';
import Coffee from './../Coffee/Coffee';
import Past from './../Past/Past';
import Footer from './../Footer/Footer';

function Main(props) {
  return (
    <section>
      <Header handleOpenPopupLogin={props.handleOpenPopupLogin} />
      <main>
        <Promo />
        <Filters updateValueCheckbox={props.updateValueCheckbox} updateFilters={props.updateFilters} />
        <Upcoming cards={props.cards} />
        <Future cards={props.cards}/>
        <Collection />
        <Coffee />
        <Past cards={props.cardsPast} />
      </main>
      <Footer />
    </section>
  );
}

export default Main;
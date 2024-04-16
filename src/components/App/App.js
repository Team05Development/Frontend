
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from './../../context/CurrentUserContext';
import Main from './../Main/Main';
import Login from './../Login/Login';
import Event from './../Event/Event';
import EventPageUpcoming from './../EventPageUpcoming/EventPageUpcoming';
import EventPageFuture from './../EventPageFuture/EventPageFuture';
import RandomCoffee from './../RandomCoffee/RandomCoffee';
import mainApi from './../../utils/MainApi';
import EventPageFilters from './../EventPageFilters/EventPageFilters';

function App() {

  const [currentUser, setСurrentUser] = React.useState({});

  const [cards, setCards] = React.useState(React.useState([])); // массив 60 событий с сервера
  const [cardsByDate, setCardsByDate] = React.useState(React.useState([])); // карточки отсортированные по дате
  const [cardsPast, setCardsPast] = React.useState(React.useState([])); // массив прошедших событий
  const [oneCard, setOneCard] = React.useState(React.useState([])); // одна карточка события

  const [isTrueSearch, setIsTrueSearch] = React.useState(false);

  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  const [isNotFound, setIsNotFound] = React.useState(false); // События по запросу не найдены
  const [isServerError, setIsServerError] = React.useState(false); // Произошла ошибка при поиске событий

  const [valueCheckbox, setValueCheckbox] = React.useState(localStorage.getItem('selectedCheckbox') ? JSON.parse(localStorage.getItem('selectedCheckbox')) : false);


  React.useEffect(() => {
    getEvents();
    getEventsPast();
    getOneEvent(2);
  }, []);

  const getEvents = () => {
    mainApi.getEvents()
      .then(cards => {
        setCards(cards);
        console.log(cards)
      }).catch(err => {
        setIsServerError(true);
        alert(`failed to get card info, err: ${err}`);
    })
  };

  const getEventsPast = () => {
    mainApi.getEventsPast()
      .then(cards => {
        setCardsPast(cards);
        console.log('PAST' + cards)
      }).catch(err => {
        setIsServerError(true);
        alert(`Past failed to get card info, err: ${err}`);
    })
  };

  const updateValueCheckbox = () => {
  //   setValueCheckbox(!valueCheckbox);
  //   if (!valueCheckbox) {
  //     setEventsListSearch(searchCheckboxEvents(cards));
  //   } else {
  //     setEventsListSearch(searchEvents(cards, !valueCheckbox));
  //   }
  //   localStorage.setItem('selectedCheckbox', !valueCheckbox);
  // }

  // const searchCheckboxEvents = (cards, valueCheckbox) => {
  //   if (valueCheckbox === 'май') {
  //     return cards.filter((cards) => cards.duration <= 40);
  //   }
  };

  const getCardsFilterDate = (dateStart, dateEnd) => {
    // mainApi.getEventsDate(dateStart, dateEnd)
    // .then(cards => {
    //   setCardsByDate(cards);
    //   setIsTrueSearch(true);
    //   console.log(cards)
    // }).catch(err => {
    //   setIsServerError(true);
    //   alert(`!!!!failed to get card info, err: ${err}`);
    // })
  };

  // const updateFilters = (id) => {
  //   let startDate = '';
  //   let endDate = '';

  //   if (id === 'may') {
  //     startDate = '2024-05-01';
  //     endDate = '2024-06-01';
  //   } else {
  //     startDate = '2024-01-01';
  //     endDate = '2024-12-01';
  //   }

  //   getCardsFilterDate(startDate, endDate)
  // };

  const handleOpenPopupLogin = () => {
    setIsOpenPopup(true);
  }

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  }

  const getOneEvent = (id) => {
    mainApi.getOneEvent(id)
      .then(card => {
        setOneCard(card);
        console.log(card)
      }).catch(err => {
        setIsServerError(true);
        alert(`CARD failed to get card info, err: ${err}`);
    })
  };

  return (
    <section className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Login isOpenPopup={isOpenPopup} handleClosePopup={handleClosePopup}></Login>
        <Routes>
          <Route  path="/" element={<Main cards={cards} updateValueCheckbox={updateValueCheckbox} handleOpenPopupLogin={handleOpenPopupLogin} cardsPast={cardsPast} />}/>
          <Route  path="/event" element={<Event getEvents={getEvents} getOneEvent={getOneEvent} cards={cards} oneCard={oneCard} />}/>
          <Route  path="/randomcoffee" element={<RandomCoffee handleOpenPopupLogin={handleOpenPopupLogin} />}/>
          <Route  path="/events/upcoming" element={<EventPageUpcoming cards={cards} handleOpenPopupLogin={handleOpenPopupLogin}/>}/>
          <Route  path="/events/future" element={<EventPageFuture cards={cards} handleOpenPopupLogin={handleOpenPopupLogin}/>}/>
          <Route  path="/events/filters" element={<EventPageFilters cards={cards} handleOpenPopupLogin={handleOpenPopupLogin} cardsByDate={cardsByDate} isTrueSearch={isTrueSearch} />}/>
        </Routes>
      </CurrentUserContext.Provider>
    </section>
  );
}

export default App;
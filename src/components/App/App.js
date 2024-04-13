
import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from './../../context/CurrentUserContext';
import Main from './../Main/Main';
import Event from './../Event/Event';
import EventPageUpcoming from './../EventPageUpcoming/EventPageUpcoming';
import EventPageFuture from './../EventPageFuture/EventPageFuture';
import RandomCoffee from './../RandomCoffee/RandomCoffee';
import mainApi from './../../utils/MainApi';
import EventPageFilters from './../EventPageFilters/EventPageFilters';

function App() {

  const [currentUser, setСurrentUser] = React.useState({});

  const [cards, setCards] = React.useState(React.useState([])); //массив всех событий с сервера

  const [isNotFound, setIsNotFound] = React.useState(false); // События по запросу не найдены
  const [isServerError, setIsServerError] = React.useState(false); //Произошла ошибка при поиске событий

  React.useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    // localStorage.setItem('selectedCheckbox', valueCheckbox);
    // if (cards.length === 0) {
    //   setIsLoading(true);
    //   moviesApi.getMovies()
    //   .then(cards => {
    //     setCards(cards);
    //     handleFoundMovies(cards, valueCheckbox);
    //     setIsServerError(false);
    //     console.log(cards);
    //   }).catch(err => {
    //     setIsServerError(true);
    //     alert(`failed to get card info, err: ${err}`);
    //   }).finally(() => {
    //     setIsLoading(false);
    //   })
    // } else {
    //   handleFoundMovies(cards, valueCheckbox);
    // }
    mainApi.getEvents()
      .then(cards => {
        setCards(cards);
        console.log(cards)
      }).catch(err => {
        setIsServerError(true);
        alert(`failed to get card info, err: ${err}`);
    })
  };

  // getEvents();


  return (
    <section className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route  path="/" element={<Main cards={cards} />}/>
        <Route  path="/event" element={<Event getEvents={getEvents} cards={cards}/>}/>
        <Route  path="/randomcoffee" element={<RandomCoffee />}/>
        <Route  path="/events/upcoming" element={<EventPageUpcoming cards={cards}/>}/>
        <Route  path="/events/future" element={<EventPageFuture cards={cards}/>}/>
        <Route  path="/events/filters" element={<EventPageFilters cards={cards}/>}/>
      </Routes>
      </CurrentUserContext.Provider>
    </section>
  );
}

export default App;
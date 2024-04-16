import './CardList.css';
import Card from './../Card/Card';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardList(props) {


  const [showMoviesCard, setShowMoviesCard] = useState({});

  useEffect(() => {
    if (props.uncomingEvents) {
      setShowMoviesCard(3);
    } else {
      setShowMoviesCard(4);
    }
  }, []);

  return (
    <section>
      {props.eventsPage ? (
        <div className="card-list__container">
          <div className='card-list'>
            {props.cards.results?.map((card, i) => {
                return <Card card={card} key={card._id} cardWeightSlim={props.cardWeightSlim}/>
              })}
          </div>
        </div>
      ) : (
        <div className="card-list__container">
        <div className='card-list'>
          {props.cards.results?.slice(0,showMoviesCard).map((card, i) => {
              return <Card card={card} key={card._id} cardWeightSlim={props.cardWeightSlim}/>
            })}
        </div>
        <Link className='button_type_open-more' to={props.route}>Посмотреть еще</Link>
      </div>
      )}
    </section>

  );
}

export default CardList;
import './Similar.css';
import CardList from './../CardList/CardList';

function Similar(props) {

  const cardWeightSlim = true;

  return (
      <section className="similar">
        <h1 className='similar__header'>Похожие события</h1>
        <CardList cards={props.cards} cardWeightSlim={cardWeightSlim}/>
      </section>
  );
}

export default Similar;
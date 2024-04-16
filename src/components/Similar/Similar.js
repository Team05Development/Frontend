import './Similar.css';
import CardList from './../CardList/CardList';

function Similar(props) {

  const cardWeightSlim = true;
  const route = '/events/similar';

  return (
      <section className="similar">
        <h1 className='similar__header'>Похожие события</h1>
        <CardList cards={props.cards} cardWeightSlim={cardWeightSlim} route={route}/>
      </section>
  );
}

export default Similar;
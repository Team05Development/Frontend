
import './EventProgram.css';
import SpeackersCardList from './../SpeackersCardList/SpeackersCardList';

function EventProgram(props) {
  return (
    <section className='program'>
      <div>
        <h2>Ведущий</h2>
        <SpeackersCardList card={props.card} />
      </div>
    </section>
  );
}

export default EventProgram;
import './Coffee.css';
import imgTeam from './../../images/team.png';
import { Link } from 'react-router-dom';

function Coffee() {
  return (
      <section className="coffee">
        <div className='coffee__info-container'>
          <h1 className='coffee__header'>Random Coffee -</h1>
          <h2 className='coffee__subtitle'>сервис дружеских и профессиональных знакомств</h2>
          <p className='coffee__text'>Это возможность сформировать правильное окружение для тех, кто вырос, но не потерял огонь в глазах.</p>
          <Link to='/randomcoffee' className='coffee__button'>Завести новые знакомства</Link>
        </div>
        <img className='coffee__img' src={imgTeam} alt='Изображение команды'></img>
      </section>
  );
}

export default Coffee;
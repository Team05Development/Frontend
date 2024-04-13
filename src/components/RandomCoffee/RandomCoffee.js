
import './RandomCoffee.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Coffee from './../Coffee/Coffee';
import RandomcofFaq from './../RandomcofFaq/RandomcofFaq';
import imgone from './../../images/img-rc-1.png';
import imgtwo from './../../images/img-rc-2.png';
import imgthree from './../../images/img-rc-3.png';
import imgitw from './../../images/itworks-Img.png';

function RandomCoffee() {
  return (
    <section>
      <Header />
      <div className='random-coffee'>
        <Coffee />
        <p className='random-coffee__paragraph'>Чтобы вернуть кайф от интересных разговоров, мы сделали платформу для встреч на «случайный кофе» с неслучайными людьми. Это возможность сформировать правильное окружение, которое поможет находить новые возможности, лучше понимать себя, свою сферу деятельности и быстрее достигать поставленных целей.</p>
        <div className='forwhom'>
          <h2 className='forwhom__header'>Для кого подходит Random Coffee?</h2>
          <ul className='forwhom__list'>
            <li className='forwhom__list-item'>
              <img className='list-item___img' width={440} height={240} alt='Абстрактное изображение' src={imgone}></img>
              <h3 className='list-item___header'>Тем, кто ищет друзей или интересных собеседников</h3>
              <p className='list-item___text'>Встречи с людьми разных профессий</p>
            </li>
            <li className='forwhom__list-item'>
              <img className='list-item___img' width={440} height={240} alt='Абстрактное изображение' src={imgtwo}></img>
              <h3 className='list-item___header'>Тем, кто хочет расширить список контактов</h3>
              <p className='list-item___text'>Продуманные нетворкинг-сессии под руководством модератора</p>
            </li>
            <li className='forwhom__list-item'>
              <img className='list-item___img' width={440} height={240} alt='Абстрактное изображение' src={imgthree}></img>
              <h3 className='list-item___header'>Тем, кто ищет рост в своём деле</h3>
              <p className='list-item___text'>100+ сообществ: предприниматели, айтишники. хобби-сообшества</p>
            </li>
          </ul>
        </div>
        <div className='how-it-works'>
          <h2 className='how-it-works__header'>Как работает сервис?</h2>
          <div className='how-it-works__container'>
            <div className='how-it-works__info'>
              <ul className='how-it-works__list'>
                <li className='how-it-works__list-item'>
                  <p className='how-it-works__item-number'>1</p>
                  <p className='how-it-works__text'>Нетворкинг и дружеские знакомства происходят в телеграме внутри сообществ по интересам. Выбирай подходящие тебе и вступай в нужные</p>
                </li>
                <li className='how-it-works__list-item'>
                  <p className='how-it-works__item-number'>2</p>
                  <p className='how-it-works__text'>Чтобы запустить встречи, ответь на вопросы бота. Это поможет умному алгоритму подбирать тебе релевантных собеседников, а собеседникам - изучить твой профиль до знакомства</p>
                </li>
                <li className='how-it-works__list-item'>
                  <p className='how-it-works__item-number'>3</p>
                  <p className='how-it-works__text'>Ты получишь контакты и анкету с основной информацией о человеке, а дальше дело за малым: списаться и договориться о личной встрече или онлайн-созвоне</p>
                </li>
              </ul>
              <img width={670} height={440} border-radius={16} alt='Абстрактное изображение' src={imgitw}></img>
            </div>
            <button className='how-it-works__button'>Завести новые знакомства</button>
          </div>
        </div>
      </div>
      <RandomcofFaq />
      <Footer />
     </section>
  );
}

export default RandomCoffee;
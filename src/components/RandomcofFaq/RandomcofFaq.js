
import './RandomcofFaq.css';
import React from "react";
import Faq from 'react-faq-component';

function RandomcofFaq() {

  const data = {
    rows: [
      {
        title: "Что за люди ходят на эти встречи?",
        content: `Всякие..`,
      },
      {
        title: "Как вы подберёте мне подходящего собеседника?",
        content: `Мэтч происходит на основе анкет участников. Чем подробнее вы их заполните, тем вероятнее, что умный алгоритм подберёт для вас подходящую пару.`,
      },
      {
        title: "Где проходят встречи?",
        content: `Где пожелаете:)`,
      },
      {
        title: "А что если мне не понравится / я не понравлюсь сообществу?",
        content: `Ну тут уж ничего не поделать..`,
      },
      {
        title: "Что, если я не могу присоединиться ко встречам на этой неделе?",
        content: `Присоединяйтесь на следующей!`,
      },
      {
        title: "Сколько длится встреча?",
        content: `Словно одно мгновение`,
      },
      {
        title: "Обязательно ли идти на встречу?",
        content: `Взялся за гуж, не говори что не дюж!`,
      }
    ]
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };

  return (
    <section className='randomcof-faq'>
      <h2 className='randomcof-faq__header'>Частые вопросы</h2>
      <Faq  data={data} config={config}/>
    </section>
  );
}

export default RandomcofFaq;
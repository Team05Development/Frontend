
import './EventFaq.css';
import React from "react";
import Faq from 'react-faq-component';

function EventFaq() {

  const data = {
    rows: [
      {
        title: "Будет ли онлайн-трансляция докладов?",
        content: `Да, да, да`,
      },
      {
        title: "До какого часа нужно приехать, чтобы получить пропуск и попасть на мероприятие?",
        content: `Обычно это можно сделать до конца последнего доклада. Но лучше приехать пораньше, чтобы не пропустить что-нибудь важное.`,
      },
      {
        title: "Смогу ли я попасть в зал, если мне на почту не пришло приглашение?",
        content: `Вы вольны делать всё, что пожелаете:)`,
      },
      {
        title: "Могу ли я передать кому-нибудь своё приглашение?",
        content: `Вы вольны делать всё, что пожелаете:)`,
      },
      {
        title: "Можно ли прийти с коллегой или с кем-нибудь из близких?",
        content: `Вы вольны делать всё, что пожелаете:)`,
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
    <section className='event-faq'>
      <h2 className='event-faq__header'>Частые вопросы</h2>
      <Faq  data={data} config={config}/>
    </section>
  );
}

export default EventFaq;
import './Filters.css';
import React from 'react';
import { useState, useEffect } from 'react';

function Filters() {

  const [isOpened, setIsOpened] = useState(false);

  function hadleClick() {
    if (!isOpened) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  }

  function changeValueCheckbox(e) {
    
  }

  return (
      <section className='filters'>
        {/* <ul>
          <li>
            <label for='period' className='filter-header'>Период</label>
            <input className='filter-select' name='period' id='period' type='button' placeholder='Не выбрано'></input>
            <ul>
              <li></li>
            </ul>
          </li>
        </ul> */}
        <ul className='list-filters'>
          <li className='filter-item'>
            <label for='period-select' className='filter-header'>Период</label>
            <input type='button' className='filter-select button_input' name='period' id='period-select' onClick={() => hadleClick()} value={'None'}></input>
            <div className={`input-container ${isOpened ? ' input-container' : ' input-container_hidden'}`} >
              <label className='filters__label'><input onChange={changeValueCheckbox()} type='checkbox' id="past" name="past" className='input_type_checkbox'></input>прошедшие</label>
              <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="future" name="future"></input>ближайшие</label>
              <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="january" name="january"></input>январь</label>
              <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="february" name="february"></input>февраль</label>
            </div>
            {/* <select className='filter-select' name='period' id='period-select'>
              <option value=''>Не выбрано</option>
              <option value='past'>прошедшие</option>
              <option value='next'>ближайшие</option>
              <option value='january'>январь</option>
              <option value='february'>февраль</option>
              <option value='march'>март</option>
              <option value='april'>апрель</option>
              <option value='may'>май</option>
              <option value='june'>июнь</option>
              <option value='july'>июль</option>
              <option value='august'>август</option>
              <option value='september'>сентябрь</option>
              <option value='october'>октябрь</option>
              <option value='november'>ноябрь</option>
              <option value='december'>декабрь</option>
              <option value='2024'>2024</option>
            </select> */}
          </li>
          {/* <li className='filter-item'>
            <label for='topic-select' className='filter-header'>Тема</label>
            <select className='filter-select' name='topic' id='topic-select'>
              <option value=''>Не выбрано</option>
              <option value='dog'>прошедшие</option>
              <option value='cat'>ближайшие</option>
              <option value='hamster'>январь</option>
              <option value='parrot'>февраль</option>
              <option value='spider'>март</option>
              <option value='goldfish'>апрель</option>
              <option value='goldfish'>май</option>
              <option value='goldfish'>июнь</option>
              <option value='goldfish'>июль</option>
              <option value='goldfish'>август</option>
              <option value='goldfish'>сентябрь</option>
              <option value='goldfish'>октябрь</option>
              <option value='goldfish'>ноябрь</option>
              <option value='goldfish'>декабрь</option>
              <option value='goldfish'>2024</option>
            </select>
          </li>
          <li className='filter-item'>
            <label for='period-select' className='filter-header'>Город</label>
            <select className='filter-select' name='period' id='period-select'>
              <option value=''>Не выбрано</option>
              <option value='dog'>прошедшие</option>
              <option value='cat'>ближайшие</option>
              <option value='hamster'>январь</option>
              <option value='parrot'>февраль</option>
              <option value='spider'>март</option>
              <option value='goldfish'>апрель</option>
              <option value='goldfish'>май</option>
              <option value='goldfish'>июнь</option>
              <option value='goldfish'>июль</option>
              <option value='goldfish'>август</option>
              <option value='goldfish'>сентябрь</option>
              <option value='goldfish'>октябрь</option>
              <option value='goldfish'>ноябрь</option>
              <option value='goldfish'>декабрь</option>
              <option value='goldfish'>2024</option>
            </select>
          </li>
          <li className='filter-item'>
            <label for='period-select' className='filter-header'>Формат проведения</label>
            <select className='filter-select' name='period' id='period-select'>
              <option value=''>Не выбрано</option>
              <option value='dog'>прошедшие</option>
              <option value='cat'>ближайшие</option>
              <option value='hamster'>январь</option>
              <option value='parrot'>февраль</option>
              <option value='spider'>март</option>
              <option value='goldfish'>апрель</option>
              <option value='goldfish'>май</option>
              <option value='goldfish'>июнь</option>
              <option value='goldfish'>июль</option>
              <option value='goldfish'>август</option>
              <option value='goldfish'>сентябрь</option>
              <option value='goldfish'>октябрь</option>
              <option value='goldfish'>ноябрь</option>
              <option value='goldfish'>декабрь</option>
              <option value='goldfish'>2024</option>
            </select>
          </li> */}
        </ul>
      </section>
  );
}

export default Filters;
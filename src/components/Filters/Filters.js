import './Filters.css';
import React from 'react';
import { useState } from 'react';

function Filters(props) {

  const [isOpenedPeriod, setIsOpenedPeriod] = useState(false);
  const [isOpenedTopic, setIsOpenedTopic] = useState(false);
  const [isOpenedCity, setIsOpenedCity] = useState(false);
  const [isOpenedFormat, setIsOpenedFormat] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  
  function hadleClickPeriod() {
    if (!isOpenedPeriod) {
      setIsOpenedPeriod(true);
      setIsOpened(true);
      setIsOpenedCity(false);
      setIsOpenedTopic(false);
      setIsOpenedFormat(false);
    } else {
      setIsOpenedPeriod(false);
      setIsOpened(false);
    }
  }

  function hadleClickTopic() {
    if (!isOpenedTopic) {
      setIsOpenedTopic(true);
      setIsOpened(true);
      setIsOpenedCity(false);
      setIsOpenedPeriod(false);
      setIsOpenedFormat(false);
    } else {
      setIsOpenedTopic(false);
      setIsOpened(false);
    }
  }

  function hadleClickCity() {
    if (!isOpenedCity) {
      setIsOpenedCity(true);
      setIsOpened(true);
      setIsOpenedPeriod(false);
      setIsOpenedTopic(false);
    } else {
      setIsOpenedCity(false);
      setIsOpened(false);
    }
  }

  function hadleClickFormat() {
    if (!isOpenedFormat) {
      setIsOpenedFormat(true);
      setIsOpened(true);
      setIsOpenedCity(false);
      setIsOpenedPeriod(false);
      setIsOpenedTopic(false);
    } else {
      setIsOpenedFormat(false);
      setIsOpened(false);
    }
  }

  function changeValueInputCheckbox(e) {
    props.updateValueCheckbox(e.target.value);
  }

  // const test = (e) =>  {
  //   props.updateFilters(e.target.id);
  // }

  return (
      <section className='filters'>
        <ul className='list-filters'>
          <li className='filter-item'>
            <label for='period-select' className='filter-header'>Период</label>
            <input type='button' className='filter-select button_input' name='period' id='period-select' onClick={() => hadleClickPeriod()} value={'Не выбрано'}></input>
          </li>
          <li className='filter-item'>
            <label for='topic-select' className='filter-header'>Тема</label>
            <input type='button' className='filter-select button_input' name='topic-select' id='topic-select' onClick={() => hadleClickTopic()} value={'Не выбрано'}></input>
          </li>
          <li className='filter-item'>
            <label for='city-select' className='filter-header'>Город</label>
            <input type='button' className='filter-select button_input' name='city-select' id='city-select' onClick={() => hadleClickCity()} value={'Не выбрано'}></input>
          </li>
          <li className='filter-item'>
            <label for='format-select' className='filter-header'>Формат</label>
            <input type='button' className='filter-select button_input' name='format-select' id='format-select' onClick={() => hadleClickFormat()} value={'Не выбрано'}></input>
          </li>
        </ul>
        <div className={`${isOpened ? 'input-cover' : 'input-cover__hidden'}`}>
          <div className={`${isOpenedCity ? 'input-container' : 'input-container__hidden'}`} >
            <label className='filters__label'><input onChange={changeValueInputCheckbox} type='checkbox' id="moscow" name="moscow" className='input_type_checkbox'></input>Москва</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Санкт-Петербург</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Ереван</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Алматы</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Белград</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Берлин</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Владивосток</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Воронеж</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Долгопрудный</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Екатеринбург</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Иннополис</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Иркутск</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Краснодар</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Минск</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Нижний Новгород</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Новосибирск</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Омск</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Пермь</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Рига</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Ростов-на-Дону</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Самара</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Саратов</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Стамбул</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Ташкент</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Тюмень</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Ульяновск</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Уфа</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Хабаровск</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="spb" name="spb"></input>Челябинск</label>           
          </div>
          <div className={`${isOpenedPeriod ? 'input-container' : 'input-container__hidden'}`} >
            <label className='filters__label'><input onChange={changeValueInputCheckbox} type='checkbox' id="past" name="past" className='input_type_checkbox'></input>прошедшие</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="future" name="future"></input>ближайшие</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="january" name="january"></input>январь</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="february" name="february"></input>февраль</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="march" name="march"></input>март</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="april" name="april"></input>апрель</label>
            <label className='filters__label'><input  className='input_type_checkbox' type='checkbox' id="may" name="may"></input>май</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="june" name="june"></input>июнь</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="july" name="july"></input>июль</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="august" name="august"></input>август</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="september" name="september"></input>сентябрь</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="october" name="october"></input>октябрь</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="november" name="november"></input>ноябрь</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="december" name="december"></input>декабрь</label>
            <label className='filters__label'><input className='input_type_checkbox' type='checkbox' id="year" name="year"></input>2024</label>
          </div>
        </div>
      </section>
  );
}

export default Filters;
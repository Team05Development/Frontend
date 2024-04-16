import './Login.css';
import { Link } from 'react-router-dom';

function Login(props) {

  const handleSubmit = function() {

  }
  const handleChangeInputEmail = function() {

  }
  const handleChangeInputPassword = function() {

  }

  return (
    <section className={props.isOpenPopup ? 'login' : 'login__hidden'}>
      <div className='login__cover'>
        <form className="login__form" noValidates onSubmit={handleSubmit}>
          <h2 className="login__header">Вход</h2>
          <fieldset className="login__field">
            <div className="login__input-cover">
              <label className="login__label" htmlFor="useremail">Почта</label>
              <input className="login__input login__input_type_login" type="email" onChange={handleChangeInputEmail} name="useremail" id="useremail" required placeholder="mail@mail.ru" minLength="2" maxLength="40" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+){1,}\.([a-zA-Z]{2,})$"/>
              {/* <span className={validateInputEmail ? 'login__input-error' : 'input-error-hidden'}>Неверное значение для данного поля</span> */}
            </div>
            <div className="login__input-cover">
              <label className="login__label" htmlFor="userpassword">Пароль</label>
              <input className="login__input login__input_type_login" type="password" onChange={handleChangeInputPassword} name="userpassword" id="userpassword" required placeholder="Пароль" minLength="8"/>
              {/* <span className={validateInputPassword ? 'login__input-error' : 'input-error-hidden'}>Неверное значение для данного поля</span> */}
              {/* <span className={props.errorInput ? 'register__input-error' : 'input-error-hidden'}>{ props.textErrorInput }</span> */}
            </div>
            <button className='button__type_fogot-password' type="button">Забыли пароль?</button>
            <button className='button__type_login' type='submit'>Войти</button>
            <button className='button__type_login-idya'>Войти с Яндекс ID</button>
          </fieldset>
        </form>
      <p className='login__text-agreement'>Нажимая кнопку входа, вы принимаете условия <a className='login__link-agreement'>Пользовательского соглашения</a> и <a className='login__link-agreement'>Политики конфиденциальности</a></p>
      <div className='login__decoration'></div>
      <Link to="/signup" className="login__link-regisration">Зарегистрироваться</Link>
      <button type='button' className='button__type_close' onClick={props.handleClosePopup} ></button>
      </div>
    </section>
  );
}

export default Login;

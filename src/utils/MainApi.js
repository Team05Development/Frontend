// export const BASE_URL = 'http://localhost:3001';
export const BASE_URL = 'http://158.160.154.62/api/events/';

class MainApi {
    constructor(options) {
      this._options = options;
    }
  
    _checkResponse(result) {
      if (result.ok)
          return result.json();
      else
          return Promise.reject(`Ошибка ${result.status}`);
    }
  
    _makeRequest(endpoint, options) {
        return fetch(this._options.baseUrl + endpoint, options).then(this._checkResponse);
    }

    getEvents() {
      return fetch(`${BASE_URL}/?start_date=2024-04-01&end_date=2024-05-01`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
    }

    getEventsPast() {
      return fetch(`${BASE_URL}?start_date=2024-01-01&end_date=2024-04-01`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
    }

    getOneEvent (id) {
      return fetch(`${BASE_URL}${id}/`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
    }

    getEventsDate(dateStart, dateEnd) {
      return fetch(`${BASE_URL}?start_date=${dateStart}&end_date=${dateEnd}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(this._checkResponse);
    }
  
    // getUser() {
    //   return this._makeRequest('/users/me', {
    //     credentials: 'include',
    //     headers: this._options.headers
    //   });
    // }

    // setInfoUser(name, email) {
    //     return this._makeRequest('/users/me', {
    //       method: 'PATCH',
    //       credentials: 'include',
    //       headers: this._options.headers,
    //       body: JSON.stringify({
    //         name: name,
    //         email: email
    //       })
    //     });
    //   }
  
    // getSavedMovies() {
    //   return this._makeRequest('/movies', {
    //     credentials: 'include',
    //     headers: this._options.headers
    //   });
    // }
  
    // addMovies(card) {
    //   return this._makeRequest('/movies', {
    //     method: 'POST',
    //     credentials: 'include',
    //     headers: this._options.headers,
    //     body: JSON.stringify({
    //       country: card.country,
    //       director: card.director,
    //       movieId: card.id,
    //       duration: card.duration,
    //       year: card.year,
    //       description: card.description,
    //       image: `https://api.nomoreparties.co/${card.image.url}`,
    //       trailerLink: card.trailerLink,
    //       thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
    //       nameRU: card.nameRU,
    //       nameEN: card.nameEN
    //     })
    //   });
    // }
  
    // deleteCard(moviesId) {
    //   return this._makeRequest('/movies/' + moviesId, {
    //     method: 'DELETE',
    //     credentials: 'include',
    //     headers: this._options.headers
    //   });
    // }
  
    // logOut() {
    //   return this._makeRequest('/users/me/signout', {
    //     method: 'POST',
    //     credentials: 'include',
    //     headers: this._options.headers,
    //   });
    // }
  }
  
  const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  export default mainApi;
import {API_ENDPOINT} from "../constants";

export default function getPokemonsService() {
  const route = `${API_ENDPOINT}/pokemons`
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const request = new Request(route, {
    method: 'GET',
    mode: 'cors',
    headers: headers,
    cache: 'no-cache',
  });

  return new Promise((resolve, reject) => {
    fetch(request)
      .then((response) => {
        if(!response.ok) {
          throw response.json()
        }

        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
  });
}
import {API_ENDPOINT} from "../constants";

export default function postPokemonsService(pokemon) {
  const route = `${API_ENDPOINT}/pokemons`;

  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  
  const request = new Request(route, {
    method: 'POST',
    mode: 'cors',
    headers: headers,
    body: JSON.stringify(pokemon)
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
import {API_ENDPOINT} from "../constants";

export default function putPokemonsService(pokemon) {
  const route = `${API_ENDPOINT}/pokemons/${pokemon.id}`;

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const request = new Request(route, {
    method: 'PUT',
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
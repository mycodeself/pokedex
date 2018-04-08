import {API_ENDPOINT} from "../constants";

/**
 *
 * @param pokemonId
 * @return {Promise<any>}
 */
export default function deletePokemonService(pokemonId) {
  const route = `${API_ENDPOINT}/pokemons/${pokemonId}`;

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const request = new Request(route, {
    method: 'DELETE',
    mode: 'cors',
    headers: headers,
  });

  return new Promise((resolve, reject) => {
    fetch(request)
      .then((response) => {
        if(!response.ok) {
          throw response.json()
        }

        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
  });
}
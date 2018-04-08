import {API_ENDPOINT} from "../constants";

export default function postPokemonImageService(pokemonId, image) {
  const route = `${API_ENDPOINT}/pokemons/${pokemonId}/image`;
  const formData = new FormData();
  formData.append('image', image, image.name);
  const headers = new Headers({
    'Content-Type': 'multipart/form-data',
  });

  const request = new Request(route, {
    method: 'POST',
    mode: 'cors',
    headers: headers,
    body: formData
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
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      })
  });
}
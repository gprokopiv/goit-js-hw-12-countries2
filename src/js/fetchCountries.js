const url = 'https://restcountries.eu/rest/v2';

function fetchCountries(value) {
  return fetch(`${url}/name/${value}`).then(response => response.json());
}

export default fetchCountries;

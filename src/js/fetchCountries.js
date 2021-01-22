export default function fetchCountries(searchQuery) {
    return fetch(searchQuery).then(
      response => {
        return response.json();
      })
      .then((data) => { 
        if (!data.status) { return data }
        throw new Error(`${data.status}: ${data.message}`);
      })
      ;
  }






















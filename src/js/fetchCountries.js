// export default function fetchCountries(searchQuery) {
//     return fetch(searchQuery).then(
//       response => {
//         return response.json();
//       })
//       .then((data) => { 
//         if (!data.status) { return data }
//         throw new Error(`${data.status}: ${data.message}`);
//       })
//       ;
//   }

  const url = 'https://restcountries.eu/rest/v2/name/';
// console.log(url)
function fetchCountries(searchQuery) {
  return fetch(`${url}${searchQuery}`)
.then(response =>
    response.json(),
  );
}

export default fetchCountries;




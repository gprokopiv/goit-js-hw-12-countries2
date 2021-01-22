import fetchCountries from './fetchCountries';
import { success, info, error } from './pnotify.js';
import oneCountryMarkup from '../template/one-country.hbs';
import upToTenCountriesMarkup from '../template/countries.hbs';

const refs = {
    input: document.querySelector('.js-input'),
    output: document.querySelector('.js-output'),
};
// refs.input.addEventListener('input', _.debounce(onInputChange, 500));
// const listItemsMarkup = createListItemsMarkup(tech);
// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//   console.log('INPUT');
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter(t =>
//     t.label.toLowerCase().includes(filter),
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }
const debounce = require('lodash.debounce');

const url = 'https://restcountries.eu/rest/v2/name/';

const debouncedSearch = debounce(() => {
    if (refs.input.value !== "") {
        fetchCountries(url + refs.input.value.toLowerCase())
            .then(data => {searchMarkup(data)})
            .catch(e => {
error({
title:'Ooops! Something went wrong 🤷',
     text: e.message,
     type: 'error'
 });
     refs.output.innerHTML = "";
 })
};
}, 500);

const searchMarkup = function (data) {
    if (data.length === 1) { refs.output.innerHTML = oneCountryMarkup(data) }
    else
    if (data.length > 1 & data.length <= 10) { refs.output.innerHTML = upToTenCountriesMarkup(data) }
    else if (data.length > 10) {
            error({
                title: "Too many matches found!",
                text: "Please enter a more specific query.",
                type: 'error'
            });
            refs.output.innerHTML = "";
        };
}
refs.input.addEventListener('input', debouncedSearch);
refs.input.addEventListener('submit', event => event.preventDefault());
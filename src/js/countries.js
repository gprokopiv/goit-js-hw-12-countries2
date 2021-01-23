import getRefs from './get-refs';
import countryOneTpl from '../template/country.hbs';
import countryListTpl from '../template/tenCountries.hbs';
import fetchCountries from './fetchCountries';
import { error } from './notifications';
// import './styles.css';

// import '@pnotify/core/dist/BrightTheme.css';
var debounce = require('lodash.debounce');
const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    clearCountriesContainer();
  e.preventDefault();

  fetchCountries(e.target.value)
    .then(data => {
      if (data.length > 10) {
        error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
      } else if (data.status === 404) {
        error({
          text:
            'No country has been found. Please enter a more specific query!',
        });
      } else if (data.length === 1) {
        refs.cardContainer.innerHTML = countryOneTpl(data);
      } else if (data.length <= 10) {
        refs.cardContainer.innerHTML = countryListTpl(data);
      }
    })
    .catch(() => {
      error({
        text: 'You must enter query parameters!',
      });
    });
}



function clearCountriesContainer() {
  refs.cardContainer.innerHTML = '';
}


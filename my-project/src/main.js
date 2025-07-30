import fetchCountries from "./fetchCountries";

import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const input = document.querySelector('#search-box');
const listContainer = document.querySelector('#country-list');
const infoContainer = document.querySelector('#country-info');

input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const query = e.target.value.trim();
  clearOutput();

  if (!query) return;

  fetchCountries(query)
    .then(countries => {
      if (countries.length > 10) {
        info({ text: 'Too many matches. Please enter a more specific name.' });
      } else if (countries.length >= 2 && countries.length <= 10) {
        renderCountryList(countries);
      } else if (countries.length === 1) {
        renderCountryCard(countries[0]);
      }
    })
    .catch(() => {
      error({ text: 'No countries found with that name!' });
    });
}

function clearOutput() {
  listContainer.innerHTML = '';
  infoContainer.innerHTML = '';
}

function renderCountryList(countries) {
  const markup = countries
    .map(
      c => `<li>
        <img src="${c.flags.svg}" alt="Flag of ${c.name}" width="30" />
        ${c.name}
      </li>`
    )
    .join('');
  listContainer.innerHTML = `<ul>${markup}</ul>`;
}

function renderCountryCard(country) {
  const languages = country.languages.map(l => l.name).join(', ');
  const markup = `
    <h2>${country.name}</h2>
    <img src="${country.flags.svg}" alt="Flag of ${country.name}" width="150" />
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Languages:</strong> ${languages}</p>
  `;
  infoContainer.innerHTML = markup;
}


export default function fetchCountries(name) {
  const fields = 'name,capital,population,languages,flags';
  return fetch(`https://restcountries.com/v2/name/${name}?fields=${fields}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}


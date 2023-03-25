import { countries } from 'countries-list';

export const countryList = [];

for (const key in countries) {
  countryList.push(countries[key].name);
}

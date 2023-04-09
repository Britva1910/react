import { countries } from 'countries-list';

export const countryList: string[] = [];

for (const key in countries) {
  if (Object.prototype.hasOwnProperty.call(countries, key)) {
    countryList.push(countries[key as keyof typeof countries].name);
  }
}

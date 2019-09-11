import * as request from 'superagent';

export function getAllCountries() {
    request
        .get('https://restcountries.eu/rest/v2/all')
        .end((err, res) => {
            console.log(res);
        });
}

export async function fetchByName(name: string) {
    const response = await request
        .get(`https://restcountries.eu/rest/v2/name/${name}`)
        .end((err, res) => {
            console.log(res);
        });
    return response;
}

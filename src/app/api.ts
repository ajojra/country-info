import * as superagent from 'superagent';

import { CountryInfo } from '../model/CountryInfo';

class API {
    private namesResponse!: IRestCountryResponse[];
    private codeResponse!: IRestCountryResponse | null;

    private url(name: string | null, alpha: string | null): string {
        const domain = 'https://restcountries.eu/rest/v2/';
        return `${domain}${name ? `name/${name}` : ''}${alpha ? `alpha/${alpha}` : ''}`;
    }

    async search(searchString: string): Promise<CountryInfo[]> {

        await superagent.get(this.url(searchString, null)).then(res => {
            this.namesResponse = res.body;
        }).catch(error => {
            this.namesResponse = [];
            console.error(error)
        });

        await superagent.get(this.url(null, searchString)).then(res => {
            this.codeResponse = res.body;
        }).catch(error => {
            this.codeResponse = null;
            console.error(error)
        });

        this.namesResponse = this.namesResponse || [];
        if (this.codeResponse && !this.namesResponse.find(n => n.name === (<IRestCountryResponse>this.codeResponse).name)) {
            this.namesResponse.push(this.codeResponse);
        }

        return this.namesResponse
            .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            .slice(0, 10)
            .map(r => new CountryInfo(r));
    }
}
export const api = new API();

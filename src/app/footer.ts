export class Footer {
    footertext: string; constructor() {
        console.log(`This is Footer constructor`);
        this.footertext = `Demo for webpack 4 set up`;
    } getFooterText(): string {
        return this.footertext
    }
}

import * as request from 'superagent';

export function runSample() {
    request
        .get('https://restcountries.eu/rest/v2/all')
        .end((err, res) => {
            console.log(res);
        });
}

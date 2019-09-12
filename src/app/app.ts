import { CountryInfo } from 'src/model/CountryInfo';

import { DOM } from './dom';
import { api } from './api';

class App {
    private countries!: CountryInfo[];
    private selectedCountry!: CountryInfo;

    constructor() {
        DOM.inputKeyUp(this.onInputKeyUp.bind(this));
    }

    private onInputKeyUp(value: string) {
        if (value.length >= 3) {
            const selectedCountry = (this.countries || []).find(c => `${c.name} - ${c.alpha3Code}` === value);
            if (selectedCountry) {
                this.onCountrySelect(selectedCountry);
            } else {
                api.search(value).then(res => {
                    this.countries = res;
                    DOM.processDataList(this.countries);
                    DOM.populateDescriptionList();
                });
            }
        } else {
            DOM.processDataList([]);
            DOM.populateDescriptionList();
        }
    }

    private onCountrySelect(selectedCountry: CountryInfo) {
        //if (!this.selectedCountry || selectedCountry.name !== this.selectedCountry.name) {
            this.onCountryChanged(selectedCountry);
        //}
    }

    private onCountryChanged(selectedCountry: CountryInfo) {
        this.selectedCountry = selectedCountry;
        DOM.populateDescriptionList(selectedCountry);
    }
}

export const app = new App();
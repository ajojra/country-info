import { CountryInfo } from 'src/model/CountryInfo';

import { DOM } from './dom';
import { api } from './api';

class App {
    private countries!: CountryInfo[];
    private selectedCountry!: CountryInfo;
    private history!: CountryInfo[];

    constructor() {
        DOM.inputChange(this.onInputChange.bind(this));
    }

    private onInputChange(value: string) {
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
        this.selectedCountry = selectedCountry;
        this.history = this.history || [];
        if(!this.history.find(c => c.name === selectedCountry.name)){
            this.history.push(selectedCountry);
        }
        DOM.populateDescriptionList(selectedCountry);
        DOM.populateHistory(this.history.reverse());
    }
}

export const app = new App();
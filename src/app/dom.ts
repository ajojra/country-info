import { CountryInfo } from "src/model/CountryInfo";

/**
 * Handling all DOM interactions
 */
export class DOM {

    /**
     * Trigger event on input key up
     * @param fn 
     */
    static inputKeyUp(fn: Function) {
        this.ready(() => {
            const input = document.querySelector("#country") as Element;
            input.addEventListener("keyup", (e) => {
                const value = (<HTMLInputElement>e.target).value;
                fn(value);
            });
        });
    };


    /**
     * Show/Hide dropdown and append options
     */
    static processDataList(countriesInfo: CountryInfo[]) {
        const datalist = document.querySelector("datalist") as Element;
        const noResult = document.querySelector("#no-result") as HTMLElement;

        if (countriesInfo && countriesInfo.length) {
            let html = '';
            countriesInfo.forEach((countryInfo: CountryInfo) => {
                html += `<option value="${countryInfo.name} - ${countryInfo.alpha3Code}">`;
            });
            datalist.innerHTML = html;
            datalist.setAttribute("id", "countries");
            noResult.style.display = "none";
        } else {
            datalist.setAttribute("id", "");
            noResult.style.display = "block";

        }
    }

    static populateDescriptionList(country?: CountryInfo) {
        const descriptionList = document.querySelector("dl") as Element;
        if (country && country.name) {
            const html = `
            <dt>Country flag:</dt>
                <dd><img class="country__flag" src="${country.flag}" alt="${country.name} flag"></dd>
            <dt>Name:</dt>
                <dd>${country.name}</dd>
            <dt>Currency name:</dt>
                ${country.currencies.map((name: string) =>
                `<dd>${name}</dd`
            )}
            <dt>Latitude/longitude:</dt>
                <dd>${country.latitudeLongitude}</dd>
            <dt>Land area:</dt>
                <dd>${country.area}</dd>
        `;
            descriptionList.innerHTML = html;
        } else {
            descriptionList.innerHTML = '';
        }
    }

    /**
 * Source: http://youmightnotneedjquery.com/
 * @param fn
 */
    private static ready(fn: Function) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', () => fn());
        }
    }
}
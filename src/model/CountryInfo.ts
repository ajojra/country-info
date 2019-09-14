export class CountryInfo {
    name!: string;
    flag!: string;
    currencies!: string[];
    latitudeLongitude!: string;
    area!: string;
    alpha3Code!: string;

    constructor(res: IRestCountryResponse) {
        if (res) {
            this.name = res.name;
            this.flag = res.flag;
            this.currencies = (res.currencies || []).map(c => c.name);
            this.latitudeLongitude = res.latlng && res.latlng.length > 1 ? `Latitude: ${res.latlng[0]} Longitude: ${res.latlng[1]}` : '';
            this.area = `${res.area} &#13218;`;
            this.alpha3Code = res.alpha3Code;
        }
    }
}
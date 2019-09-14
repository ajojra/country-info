interface IRestCountryResponse {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         string;
    subregion:      string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number;
    gini:           number | null;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    string;
    currencies:     ICurrency[];
    languages:      ILanguage[];
    translations:   ITranslations;
    flag:           string;
    regionalBlocs:  IRegionalBloc[];
    cioc:           string;
}

interface ICurrency {
    code:   string;
    name:   string;
    symbol: string;
}

interface ILanguage {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

interface IRegionalBloc {
    acronym:       string;
    name:          string;
    otherAcronyms: any[];
    otherNames:    string[];
}

interface ITranslations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}

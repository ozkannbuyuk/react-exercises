export interface Currency {
  name: string;
  symbol: string;
}

export interface Language {
  name: string;
}

export interface Translations {
  common: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
}

export interface CountryType {
  name: {
    common: string;
  };
  capital: string[];
}

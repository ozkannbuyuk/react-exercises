import { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}

const CountryComponent: FunctionComponent<ICountryProps> = (props) => {
  const { country } = props;

  return (
    <p>
      {country.name.common} - {country.capital && country.capital[0]}
    </p>
  );
};

export default CountryComponent;

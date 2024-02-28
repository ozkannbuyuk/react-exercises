import axios from "axios";
import { useEffect, useState } from "react";
import CountryComponent from "./components/Country";
import { CountryType } from "./types";
import Loading from "./components/Loading";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(response.data);
    } catch (error) {
      console.log("Error occurred while fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Loading loading={loading}>
        {countries.map((country, index) => (
          <CountryComponent key={index} country={country} />
        ))}
      </Loading>
    </div>
  );
}

export default App;

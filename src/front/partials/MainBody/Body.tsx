import React, { useState, ChangeEvent, useEffect } from "react";
import { SingleValue } from "react-select";
import "./mainBody.css";

import DropdownList from "../../components/DropdownList/DropdownList";
import ZipCodeInput from "../../components/ZipCodeInput/ZipCodeInput";
import Response from "../../components/Response/Response";
import Button from "../../components/Button/Button";
import apolloClient from "../../api/client";
import { zippopotamQuery } from "../../api/queries/zippopotamQuery";

export type place = {
  "place name": string;
  longitude: number;
  state: string;
  "state abbreviation": string;
  latitude: number;
};

type queryResponse = {
  data: {
    zippopotamQuery: {
      places: place[];
      postCode: number;
      [key: string]: any;
    };
    [key: string]: any;
  };
};

const MainBody: React.FC = () => {
  const [countryCode, setCountryCode] = useState("US");
  const [zipCode, setZipCode] = useState("");
  const [inputError, setInputError] = useState(false);
  const [zipCodeInfo, setZipCodeInfo] = useState<place | undefined>(undefined)
  const [zipCodeError, setZipCodeError] = useState('')

  const inputCheck =
    /^((\d{5})|(AD(\d{3}))|(\d{4})|(\d{5}\-\d{3})|(\w\d\w)|(\d{3}\s\d{2})|(\d{3})|(\d{6})|(IM\d)|(JE\d))$/;
  

  const onCountryChange = (
    newValue: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    setCountryCode(newValue?.value as string);
  };

  const onZipCodeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputError(!inputCheck.test(event.target.value));
    setZipCode(event.target.value);
  };

  const onButtonClick = async () => {
    try {
      const response: queryResponse = await apolloClient.query({
        query: zippopotamQuery,
        variables: { countryCode, zipCode },
      });

      const { data: {zippopotamQuery: { places = []}}} = response;

      places[0]?.latitude ? setZipCodeInfo(places[0]) : setZipCodeError('No info obtained');

      console.log(zipCodeInfo);
    } catch(error) {
      setZipCodeInfo(undefined);
      setZipCodeError('No info obtained');
    }
    
    
  };

  useEffect(() => {}, [inputError, zipCodeError, zipCodeInfo?.latitude]);

  return (
    <div className="mainBody">
      <a>Select country and write your zip code</a>
      <div>
        <DropdownList onCountryChange={onCountryChange} />
        <ZipCodeInput
          onZipCodeInputChange={onZipCodeInputChange}
          error={inputError}
        />
        <Button onButtonClick={onButtonClick} />
      </div>
      <Response error={zipCodeError} info={zipCodeInfo}/>
    </div>
  );
};
export default MainBody;

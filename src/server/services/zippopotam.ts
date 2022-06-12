import axios from "axios";

type place = {
  "place name": string;
  longitude: number;
  state: string;
  "state abbreviation": string;
  latitude: number;
};

type zipCodeInfo = {
  "post code": number;
  country: string;
  "country abbreviation": string;
  places: place[];
};

const ZIPPOPOTAM_BASE_URL = "http://api.zippopotam.us";

export const getZipCodeInfo = async (countryCode: string, zipCode: string) => {
  const url = new URL(
    `/${countryCode}/${zipCode}`,
    ZIPPOPOTAM_BASE_URL
  ).toString();

  const { data: zipCodeData } = await axios.get<zipCodeInfo>(url);

  return {
    postCode: zipCodeData["post code"],
    country: zipCodeData.country,
    countryAbbreviation: zipCodeData["country abbreviation"],
    places: zipCodeData.places,
  };
};

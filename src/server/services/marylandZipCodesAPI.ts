import axios from "axios";

const marylandZipCodeAPIURL =
  "https://opendata.maryland.gov/api/views/ryxx-aeaf/rows.json?accessType=DOWNLOAD";

const ZIP_CODE_COLUMN_NAME = "Zip Code";

type IResponseColumn = {
  name: string;
  [key: string]: any;
};

type marylandAPIResponse = {
  meta: {
    view: {
      [key: string]: any;
      columns: IResponseColumn[];
    };
  };
  data: [][];
};

type IZipCode = {
  [key: string]: any;
};

export const getZipCode = async (zipCode: string) => {
  const { data: responseData }  = await axios.get<marylandAPIResponse>(marylandZipCodeAPIURL);

  const { meta: { view: { columns = [] } = {} } = {}, data } = responseData;

  let zipCodePosition: number;

  const columnNames = columns.map((column, index) => {
    if (column.name === ZIP_CODE_COLUMN_NAME) zipCodePosition = index;
    return column.name;
  });

  const zipCodes = Object.fromEntries(
    new Map(
      data.map((zipCodeArray) => {
        const zipCodeObject: IZipCode = {};
        zipCodeArray.forEach((value, index) => {
          zipCodeObject[columnNames[index]] = value;
        });
        return [zipCodeArray[zipCodePosition], zipCodeObject];
      })
    )
  );

  return {
    county: zipCodes[zipCode].County,
    city: zipCodes[zipCode].City
  };
};
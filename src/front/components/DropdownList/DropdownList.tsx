import * as React from "react";
import Select, {SingleValue} from "react-select";
import "./dropdownlist.css";

const options = [
  { label: "Andorra", value: "AD" },
  { label: "Argentina", value: "AR" },
  { label: "American Samoa", value: "AS" },
  { label: "Austria", value: "AT" },
  { label: "Australia", value: "AU" },
  { label: "Bangladesh", value: "BD" },
  { label: "Belgium", value: "BE" },
  { label: "Bulgaria", value: "BG" },
  { label: "Brazil", value: "BR" },
  { label: "Canada", value: "CA" },
  { label: "Switzerland", value: "CH" },
  { label: "Czech Republic", value: "CZ" },
  { label: "Germany", value: "DE" },
  { label: "Denmark", value: "DK" },
  { label: "Dominican Republic", value: "DO" },
  { label: "Spain", value: "ES" },
  { label: "Finland", value: "FI" },
  { label: "Faroe Islands", value: "FO" },
  { label: "France", value: "FR" },
  { label: "Great Britain", value: "GB" },
  { label: "French Guyana", value: "GF" },
  { label: "Guernsey", value: "GG" },
  { label: "Greenland", value: "GL" },
  { label: "Guadeloupe", value: "GP" },
  { label: "Guatemala", value: "GT" },
  { label: "Guam", value: "GU" },
  { label: "Guyana", value: "GY" },
  { label: "Croatia", value: "HR" },
  { label: "Hungary", value: "HU" },
  { label: "Isle of Man", value: "IM" },
  { label: "India", value: "IN" },
  { label: "Iceland", value: "IS" },
  { label: "Italy", value: "IT" },
  { label: "Jersey", value: "JE" },
  { label: "Japan", value: "JP" },
  { label: "Liechtenstein", value: "LI" },
  { label: "Sri Lanka", value: "LK" },
  { label: "Lithuania", value: "LT" },
  { label: "Luxembourg", value: "LU" },
  { label: "Monaco", value: "MC" },
  { label: "Moldavia", value: "MD" },
  { label: "Marshall Islands", value: "MH" },
  { label: "Macedonia", value: "MK" },
  { label: "Northern Mariana Islands", value: "MP" },
  { label: "Martinique", value: "MQ" },
  { label: "Mexico", value: "MX" },
  { label: "Malaysia", value: "MY" },
  { label: "Holland", value: "NL" },
  { label: "Norway", value: "NO" },
  { label: "New Zealand", value: "NZ" },
  { label: "Phillippines", value: "PH" },
  { label: "Pakistan", value: "PK" },
  { label: "Poland", value: "PL" },
  { label: "Saint Pierre and Miquelon", value: "PM" },
  { label: "Puerto Rico", value: "PR" },
  { label: "Portugal", value: "PT" },
  { label: "French Reunion", value: "RE" },
  { label: "Russia", value: "RU" },
  { label: "Sweden", value: "SE" },
  { label: "Slovenia", value: "SI" },
  { label: "Svalbard & Jan Mayen Islands", value: "SJ" },
  { label: "Slovak Republic", value: "SK" },
  { label: "San Marino", value: "SM" },
  { label: "Thailand", value: "TH" },
  { label: "Turkey", value: "TR" },
  { label: "United States", value: "US" },
  { label: "Vatican", value: "VA" },
  { label: "Virgin Islands", value: "VI" },
  { label: "Mayotte", value: "YT" },
  { label: "South Africa", value: "ZA" },
];

type Props = {
  onCountryChange: (value: SingleValue<{
    value: string,
    label: string
  }>) => void;
}

const DropdownList = ({onCountryChange}: Props) => {
  return (
    <div className="dropdown">
      <Select
        onChange={onCountryChange}
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary: "rgba(121, 107, 246, 0.329)",
            neutral80: "rgb(121, 107, 246)",
            primary25: "rgba(121, 107, 246, 0.329)",
          },
        })}
        defaultValue={{ value: "US", label: "United States" }}
      ></Select>
    </div>
  );
};


export default DropdownList;

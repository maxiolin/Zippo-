import * as React from "react";
import { ChangeEvent } from "react";
import "./zipcodeinput.css";

type Props = {
  onZipCodeInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
};

const ZipCodeInput = ({ onZipCodeInputChange, error = false }: Props) => {
  return (
    <input
      style={{ color: error ? "red" : "rgb(121, 107, 246)" }}
      onChange={onZipCodeInputChange}
      className="zipcodeinput"
    ></input>
  );
};

export default ZipCodeInput;

import React from "react";
import "./response.css";

import { place } from "../../partials/MainBody/Body";

type Props = {
  info?: place | undefined;
  error?: string | undefined;
};

const Response = ({ info, error }: Props) => {
  return (
    <div className="response">
      {info?.latitude ? (
        <>
          <label style={{ fontSize: "4.5vh" }}>Place Name: </label>
          <b>{info["place name"] || "No info available"}</b>
          <br></br>
          <label style={{ fontSize: "4.5vh" }}>State: </label>
          <b>{info.state || "No info available"}</b>
          <br></br>
          <label style={{ fontSize: "4.5vh" }}>Longitude: </label>
          <b>{info.longitude || "No info available"}</b>
          <br></br>
          <label style={{ fontSize: "4.5vh" }}>Latitude: </label>
          <b>{info.latitude || "No info available"}</b>
          <br></br>
        </>
      ) : (
        <label style={{ fontSize: "4.5vh" }}>{error}</label>
      )}
    </div>
  );
};

export default Response;

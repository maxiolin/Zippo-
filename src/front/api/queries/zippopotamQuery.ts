import { gql } from "@apollo/client";

export const zippopotamQuery = gql`
  query ZippopotamQuery($countryCode: String, $zipCode: String) {
  zippopotamQuery(countryCode: $countryCode, zipCode: $zipCode) {
    postCode
    places {
      stateAbbreviation
      state
      placeName
      longitude
      latitude
    }
  }
}
`
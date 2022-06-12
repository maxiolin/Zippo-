import { gql } from "apollo-server";

import { getZipCodeInfo } from "../services/zippopotam";


type IArgs = {
    countryCode: string;
    zipCode: string;
}

export const typeDefs = gql`
    type place {
        placeName: String,
        longitude: Float,
        state: String,
        stateAbbreviation: String,
        latitude: Float
    }

    type zipCodeInfo {
        postCode: Int,
        country: String,
        countryAbbreviation: String,
        places: [place]
    }

    type Query {
        zippopotamQuery( countryCode: String, zipCode: String ): zipCodeInfo
    }

`

export const resolvers = {
    Query: {
        zippopotamQuery: async (_:any, args: IArgs) =>  await getZipCodeInfo(args.countryCode, args.zipCode)
    }
} 
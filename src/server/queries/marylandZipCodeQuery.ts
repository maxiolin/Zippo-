import { gql } from "apollo-server";

import { getZipCode } from "../services/marylandZipCodesAPI";

type IArgs = {
    zipCode: string;
}

export const typeDefs = gql`
    type zipCode {
        county: String!
        city: String!
    }

    type Query {
        marylandZipCode( zipCode: String ): zipCode
    }

`

export const resolvers = {
    Query: {
        marylandZipCode: async (_:any, args: IArgs) =>  await getZipCode(args.zipCode)
    }
} 
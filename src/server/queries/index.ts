import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"; 
import { typeDefs as marylandTypes, resolvers as  marylandResolvers} from "./marylandZipCodeQuery";
import { typeDefs as zipppotamTypes, resolvers as zipppotamResolvers } from "./zippopotamQuery";

export default {
  typeDefs: mergeTypeDefs([marylandTypes, zipppotamTypes]),
  resolvers: mergeResolvers([marylandResolvers, zipppotamResolvers])
}
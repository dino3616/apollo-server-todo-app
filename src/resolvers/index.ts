import { Resolvers } from '../types/generated/graphql';
import * as query from './query';
import * as mutaiton from './mutation/';

const resolver: Resolvers = {
    Query: query,
    Mutation: mutaiton,
};

export default resolver;

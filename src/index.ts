import { ApolloServer } from 'apollo-server';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { join } from 'path';
import connectDB from './db/connection';
import resolvers from './resolvers';

connectDB();

const schema = loadSchemaSync(join(__dirname, '../schema.gql'), {
    loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const server = new ApolloServer({
    schema: schemaWithResolvers,
    context: {
        name: 'string',
        email: 'string',
        token: 'string',
    },
});

const port = process.env.PORT || 3000;
server.listen(port).then(({ url }) => {
    console.log(`Apollo Server ready at ${url} 🚀`);
});

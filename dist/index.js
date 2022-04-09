"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const load_1 = require("@graphql-tools/load");
const schema_1 = require("@graphql-tools/schema");
const path_1 = require("path");
const connection_1 = __importDefault(require("./db/connection"));
const resolvers_1 = __importDefault(require("./resolvers"));
(0, connection_1.default)();
const schema = (0, load_1.loadSchemaSync)((0, path_1.join)(__dirname, '../schema.gql'), {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
const schemaWithResolvers = (0, schema_1.addResolversToSchema)({ schema, resolvers: resolvers_1.default });
const server = new apollo_server_1.ApolloServer({
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
//# sourceMappingURL=index.js.map
// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://huanren.stepzen.net/api/loitering-shrimp/__graphql",
    headers: {
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;

//"https://huanren.stepzen.net/api/loitering-shrimp/__graphql"
//https://localhost:5001/api/loitering-shrimp
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Web3Provider from "./components/Web3Provider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const APIURL = "https://api-mumbai.lens.dev/";

const apolloClient = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

root.render(
  <Web3Provider>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Web3Provider>
);

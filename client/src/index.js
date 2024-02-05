import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import BulkData from "./Pages/BulkData";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "http://localhost:5005/api",
  // uri: "http://localhost:5005/getBulkData",
  // uri: "http://13.233.214.222:5005/api",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Home />
      {/* <BulkData /> */}
    </ApolloProvider>
  </React.StrictMode>
);

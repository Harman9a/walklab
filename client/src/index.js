import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import BulkData from "./Pages/BulkData";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import RouterCom from "./router";
import { Provider } from "react-redux";
import { Store, persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "http://localhost:5005/api",
  // uri: "http://localhost:5005/getBulkData",
  // uri: "http://13.233.214.222:5005/api",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

root.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <RouterCom />
      </ApolloProvider>
    </PersistGate>
  </Provider>
);

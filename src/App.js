import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import theme from "./utils/themes";
import AppRoutes from "./AppRoutes";
import { AppProvider } from "./context/AppProvider";
import "./App.css";

const link = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL || "http://localhost:4000",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <AppRoutes />
          </ThemeProvider>
        </AppProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

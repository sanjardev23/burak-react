import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StylesThemeProvider } from "@mui/styles";
import theme from "./app/MaterialTheme";
import { Router } from "./app/Router";
import "./css/index.css";
import ContextProvider from "./app/context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <StylesThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <App />
            </Router>
          </StylesThemeProvider>
        </ThemeProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
);

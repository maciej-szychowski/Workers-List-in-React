import React from "react";
import GlobalStyle from "theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/MainTheme";
import AppContext from "context";

const MainTemplate = ({ children }) => (
  <AppContext.Consumer>
    {(context) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle dark={context.isDark} />
        {children}
      </ThemeProvider>
    )}
  </AppContext.Consumer>
);

export default MainTemplate;

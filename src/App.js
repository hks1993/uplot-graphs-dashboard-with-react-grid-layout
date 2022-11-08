import "./styles.css";
import { GlobalStyles } from "./components/styled/globalStyled";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { MainContent } from "./components/mainContent";
import { ChartReducer } from "./reducers/chartsReducer";
import { ChartsContext } from "./reducers/chartsContext";
import { useReducer, useContext } from "react";
const theme = {
  maxWidth: "2048px",
  primary: "blue",
  secondary: "red",
  neutral: "gray",
  secondary: "red",
  background: {
    header: "#ebfbff",
    body: "#fff",
    footer: "",
  },
  mobile: "768px",
  tablet: "1024px",
};

export default function App() {
  const [state, dispatch] = useReducer(ChartReducer, {
    data: [],
    firstChartData: [],
    secondChartData: [],
  });
  return (
    <ChartsContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header />
        <MainContent />
      </ThemeProvider>
    </ChartsContext.Provider>
  );
}

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyles } from "./components/styled/globalStyled";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { MainContent } from "./components/mainContent";
import { ChartReducer } from "./reducers/chartsReducer";
import { ChartsContext } from "./reducers/chartsContext";
import { AuthProvider } from "./contexts/authContext";
import { Signup } from "./components/authentication/signup";
import { Login } from "./components/authentication/login";
import PrivateRoute from "./components/authentication/privateRoute";
import { useReducer, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Router>
          <AuthProvider>
            <Header />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <MainContent />
                  </PrivateRoute>
                }
              />
              <Route path={"/signup"} element={<Signup />} />
              <Route path={"/login"} element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </ChartsContext.Provider>
  );
}

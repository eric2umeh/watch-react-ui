import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import { ToasterProvider } from "./ui/toasterCtx/ToasterContext";
import { Cart, ChangePassword, ForgetPass, History, Home, LoginRegister, PageNotFound, Product, Profile } from "./pages";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { lightTheme, darkTheme } from './globalStyles/GlobalStyles';
import { useCustomeTheme } from "./functions/useCustomTheme";


function App() {
  const [theme, setTheme] = useCustomeTheme();
  const isLightTheme = theme === "light";

  return (
    <>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle/>
        <Router>
          <ToasterProvider>
            <Layout theme={theme} setTheme={setTheme}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/history" element={<History />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginRegister />} />
                <Route path="/register" element={<LoginRegister />} />
                <Route path="/forgot-password" element={<ForgetPass />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </Layout>
          </ToasterProvider>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

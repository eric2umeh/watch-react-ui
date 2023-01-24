import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "../../globalStyles/GlobalStyles";
import { ToasterProvider } from "../../ui/toasterCtx/ToasterContext";
import { ForgetPass, LoginRegister, PageNotFound, Confirmation } from "..";


function LandingPage() {
    return (
        <>
            <Router> 
                <GlobalStyle />
                <ToasterProvider>
                    <Routes>
                        <Route path="/" element={<LoginRegister />} />
                        <Route path="/register" element={<LoginRegister />} />
                        <Route path="/forgot-password" element={<ForgetPass />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </ToasterProvider>
            </Router>
        </>
    );
}

export default LandingPage;
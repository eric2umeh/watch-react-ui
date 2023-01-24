import React from "react";
import styled from "styled-components";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";


function Layout({ theme, setTheme, children, ...rest }) {

    return (
        <Grid {...rest}>
            <Nav theme={theme} setTheme={setTheme} />
            
            {children}

            <Footer />
        </Grid>
    );
}

export default Layout;


const Grid = styled.div`

`;


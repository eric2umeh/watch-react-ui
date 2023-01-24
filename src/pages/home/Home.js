import React from 'react'
import styled from 'styled-components'
import Brand from './components/Brand';
import Latest from './components/Latest';
import Newsletter from './components/Newsletter';
import Sale from './components/Sale';
import Products from './components/Products';
import AboutUs from './components/AboutUs';

// import { Brand, Latest, Sale, Products, AboutUs } from './components';
function Home() {

    return (
        <Container>
            <main className="main">
                <Brand />

                <Sale />

                <AboutUs />

                <Products />

                <Latest />

                <Newsletter />
            </main>
        </Container>
    )
}

export default Home


const Container = styled.div`
    .main {
        overflow: hidden;
    }
`;
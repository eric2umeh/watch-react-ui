import React from 'react'
import styled from 'styled-components'
import { Button } from '../../ui'
import { Page } from '../../ui/core'

function Confirmation() {
    return (
        <Page
            // title="Confirmation"
        >
            <Container>

                <div className="start"></div>

                <div className="middle">
                    <p id="title">Confirmation</p>

                    <div id="body">
                        <p>Thank you David Akanobi for registering with us.</p> 
                        <p>We would review your company and get back to you within the next 24 Hours.</p>
                        <p>Please check your personal email for the response.</p>

                        <a href="/dashboard">
                            <Button 
                                to="/dashboard"
                                id="button"
                                title="Go back to the home page"
                            />
                        </a>
                    </div>
                </div>

                <div className="end"></div>
            </Container>
        </Page>
    )
}

export default Confirmation


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    text-align: center;
    background: var(--color-light);
    margin: 90px 40px;
    padding: 40px;
    border-radius: 10px;

    #title {
        font-size: var(--fsize-10);
        margin: 0px 0px 40px;
    }

    #body {
        font-size: var(--fsize-6);

        #button {
            margin: 20px 0px 0px;
        }
    }
`;
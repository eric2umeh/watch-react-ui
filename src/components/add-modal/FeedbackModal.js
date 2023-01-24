import React, { useState } from 'react'
import styled from 'styled-components';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';
import { Button } from '../../ui';

function FeedbackModal() {

    const [creds, setCreds] = useState({
        seat: '',
        firstName: '',
        LastName: '',
        email: '',
        phone: '',
    });

    const onChange = (e) => {
        setCreds((prevCreds) => ({
        ...prevCreds,
        [e.target.name]: e.target.value,
        }));
    };

    return (
        <Container>
            <div className="trip">
                <table>
                    <thead>
                        <tr>
                            <td>Trip Info</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <div className="body" >
                            <tr>
                                <td>Departure</td>
                                <td>Enugu, Enugu</td>
                            </tr>
                            <tr>
                                <td>Destination</td>
                                <td>Warri, Delta</td>
                            </tr>
                            <tr>
                                <td>Trip Reference</td>
                                <td>CKDHKSHKSNAJAN19382NS3R</td>
                            </tr>
                            <tr>
                                <td>Vehicle Number</td>
                                <td>BRO-457-SW</td>
                            </tr>
                            <tr>
                                <td>Air-Condition</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Snacks</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>₦3,000</td>
                            </tr>
                            <tr>
                                <td>Departure Time</td>
                                <td>06:00 AM</td>
                            </tr>
                            <tr>
                                <td>Departure Date</td>
                                <td>02-04-2012</td>
                            </tr>
                            <tr>
                                <td>Driver</td>
                                <td>Paul Didier Drogba</td>
                            </tr>
                            <tr>
                                <td>No. of Seats</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>Note</td>
                                <td className="note">This trip has a pick-up time by 5:30am at Saint John's.</td>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </div>

            <div className="feedback">
                <p>Feedback</p>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <div className="body" >
                    <tbody>
                        <tr>
                            <td>Rider's Comment:</td>
                            <td>The Ride was hideous and i dont i want to commute with your brand ever.</td>
                        </tr>
                    </tbody>
                    </div>
                </table>

                <form action="">
                    <textarea name="" id="" cols="35" rows="7">
                        Write a feedback here
                    </textarea>

                    <ButtonDiv>
                        <Button >
                            SEND
                        </Button>
                    </ButtonDiv>
                </form>
            </div>
        </Container>
    )
}

export default FeedbackModal

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    margin: 30px 20px 0 20px;

    @media only screen and (max-width: ${bp.desktop}) {
        grid-template-columns: 1fr;
    }

    .trip {
        display: grid;
        grid-template-columns: 1fr;
        
        table {
            width: 80%; 
            
            @media only screen and (max-width: ${bp.desktop}) {
                width: 100%; 
            }

            thead {
                text-align: start;
                font-size: var(--fsize-6);
            }
            
            tbody {
                color: var(--color-blue-4);
                
                .body {
                    margin-top: 30px;
                }

                td:nth-child(odd) {
                    text-align: start;
                    padding: 6px 0;
                }
                
                td:nth-child(even) {
                    text-align: end;
                }
                
                .note {
                    max-width: 60%;
                }
            }
        }
    }

    .feedback {
        text-align: start;
        
        tbody {
            text-align: start;
            color: var(--color-blue-4);
        }

        .body {
            margin-top: 20px;
            margin-bottom: 30px;
        }
        
        p {
            font-size: var(--fsize-6);
            margin-bottom: 20px;

            @media only screen and (max-width: ${bp.desktop}) {
                margin: 20px 0; 
            }
        }

        textarea {
            border: 1px solid var(--color-blue-2);
            color: var(--color-blue-3);
        }
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 30px;
`;


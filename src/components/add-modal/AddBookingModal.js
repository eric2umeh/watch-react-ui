import React, { useState } from 'react'
import styled from 'styled-components';
import { TextField } from '../../ui/core';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';
import { Button } from '../../ui';

function AddBookingModal() {

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
            <div className="booking-first">
                <table>
                    <thead>
                        <tr>
                            <td>Booking Info</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                    <div className="body" >
                        <tr>
                            <td>From</td>
                            <td>Enugu, Enugu</td>
                        </tr>
                        <tr>
                            <td>To</td>
                            <td>Warri, Delta</td>
                        </tr>
                        <tr>
                            <td>Trip ID</td>
                            <td>CKDHKSHKSNAJAN19382NS3R</td>
                        </tr>
                        <tr>
                            <td>Vehicle </td>
                            <td>BRO-457-SW</td>
                        </tr>
                        <tr>
                            <td>AC</td>
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
                            <td>Destination Time</td>
                            <td>02-04-2012</td>
                        </tr>
                        <tr>
                            <td>Driver</td>
                            <td>Paul Didier Drogba</td>
                        </tr>
                        <tr>
                            <td>Total Seats</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Note</td>
                            <td className="note">This booking has a pick-up time by 5:30am at Saint John's.</td>
                        </tr>
                    </div>
                    </tbody>
                </table>
            </div>

            <div className="customer-second">

                <div className="customer-div">
                    <p>Passenger Info</p>

                    <form action="">
                        <div className="passenger-div">
                            <select name="" id="">
                                <option value="destination">Available Seats</option>
                                <option value="destination">01</option>
                                <option value="destination">02</option>
                                <option value="destination">03</option>
                                <option value="destination">04</option>
                            </select>

                            <TextField 
                                label="Phone"
                                type="text"
                                value={creds.phone}
                                onChange={onChange}
                                name="phone"
                                id="phone"
                            />

                            <TextField 
                                label="First Name"
                                type="text"
                                value={creds.firstName}
                                onChange={onChange}
                                name="firstName"
                                id="firstName"
                            />

                            <TextField 
                                label="Last Name"
                                type="text"
                                value={creds.LastName}
                                onChange={onChange}
                                name="LastName"
                                id="LastName"
                            />

                            <TextField 
                                label="Email"
                                type="text"
                                value={creds.email}
                                onChange={onChange}
                                name="email"
                                id="email"
                            />

                        <TextField 
                            label="Address"
                            type="text"
                            value={creds.phone}
                            onChange={onChange}
                            name="phone"
                            id="phone"
                        />
                        </div>
                    </form>
                </div>

                <div className="kin-details">
                    <p>Next of kin Info</p>

                    <form action="">
                        <div className="kin-div">

                            <TextField 
                                label="Kin's First Name"
                                type="text"
                                value={creds.firstName}
                                onChange={onChange}
                                name="firstName"
                                id="firstName"
                            />

                            <TextField 
                                label="Kin's Last Name"
                                type="text"
                                value={creds.LastName}
                                onChange={onChange}
                                name="LastName"
                                id="LastName"
                            />

                            <TextField 
                                label="Relationship"
                                type="text"
                                value={creds.LastName}
                                onChange={onChange}
                                name="LastName"
                                id="LastName"
                            />

                            <TextField 
                                label="Kin's Phone"
                                type="number"
                                value={creds.email}
                                onChange={onChange}
                                name="email"
                                id="email"
                            />
                        </div>

                        <ButtonDiv>
                            <Button>
                                Submit
                            </Button>
                        </ButtonDiv>

                    </form>
                </div>
            </div>
            
        </Container>
    )
}

export default AddBookingModal

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 30px 20px 0;
    grid-gap: 30px;

    @media only screen and (max-width: ${bp.tablet}) {
        grid-template-columns: 1fr;
        margin: 30px 10px 0;
    }

    .booking-first {
        display: grid;
        grid-template-columns: 1fr;
        
        table {
            
            thead {
                text-align: start;
                font-size: var(--fsize-6);
            }
            
            tbody {
                color: var(--color-blue-4);

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

    .customer-second {

        .customer-div {

            p {
                font-size: var(--fsize-6);
                
                @media only screen and (max-width: ${bp.desktop}) {
                    margin: 10px 0; 
                }
            }
            
            .passenger-div {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 0px 20px;
                text-align: start;
                margin: -10px 0px 0;
                
                select {
                    padding: 12px;
                    border-radius: 5px;
                    width: 100%;
                    border: 1px solid var(--color-blue-2);
                    margin-top: 24px;
                    color: var(--color-blue-4);
                }
            }
        }

        .kin-details {
            margin-top: 15px;

            p {
                font-size: var(--fsize-6);
                
                @media only screen and (max-width: ${bp.desktop}) {
                    margin: 10px 0; 
                }
            }

            .kin-div {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 0px 20px;
                text-align: start;
                margin-top: -10px;
            }
        }
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 23px;
`;


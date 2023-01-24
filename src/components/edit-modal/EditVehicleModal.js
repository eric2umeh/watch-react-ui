import React, { useState } from 'react'
import styled from 'styled-components';
import { TextField } from '../../ui/core';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';
import { Button } from '../../ui';

function EditVehicleModal() {

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
                <p className="heading">Note*</p>
                <p className="note">This is a section for specific instructions should be followed before creating a vehicle</p>
                <ul>
                    <li>Only CEO and Admin can edit a vehicle</li>
                    <li>Tfare would approve/reject the pending vehicle</li>
                    <li>Vehicle number must be a registered number</li>
                    <li>All fields must be genuine</li>
                </ul>
            </div>

            <div className="vehicle-detail">
                <form action="">
                <TextField 
                        label="Vehicle Name"
                        type="text"
                        value={creds.firstName}
                        onChange={onChange}
                        name="firstName"
                        id="firstName"
                    />

                    <select name="" id="">
                        <option value="destination">Vehicle Type</option>
                        <option value="destination">Sienna</option>
                        <option value="destination">Hiace</option>
                    </select>

                    <select name="" id="">
                        <option value="destination">Category</option>
                        <option value="destination">Regular</option>
                        <option value="destination">Executive</option>
                    </select>

                    <TextField 
                        label="Number of Available Seats"
                        type="number"
                        value={creds.phone}
                        onChange={onChange}
                        name="phone"
                        id="phone"
                    />

                    <ButtonDiv>
                        <Button>
                            Add Vehicle
                        </Button>
                    </ButtonDiv>
                </form>
            </div>
        </Container>
    )
}

export default EditVehicleModal

const Container = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 0.5fr;
    margin: 0px 20px 0 20px;
    grid-gap: 20px;

    @media only screen and (max-width: ${bp.desktop}) {
        grid-template-columns: 1fr;
        gap: 0px;
    }

    .trip {
        .heading {
            font-size: var(--fsize-6);
            margin-top: 30px;
            color: var(--color-blue-4);
            text-align: start;
        }

        .note {
            margin-top: 10px;
            text-align: start;
            color: var(--color-blue-4);
        }

        ul {
            text-align: start;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 10px 17px;
            color: var(--color-blue-4);

            @media only screen and (max-width: ${bp.desktop}) {
                grid-template-columns: 1fr;
                grid-gap: 0px;
            }

            li {
                list-style-type: disc;
                padding: 10px 17px;
            }
        }
    }

    .vehicle-detail {
        text-align: start;
        
        @media only screen and (max-width: ${bp.tablet}) {
            margin-top: -30px;
        }

        p {
            font-size: var(--fsize-6);
        }

        select {
            padding: 12px;
            border-radius: 5px;
            width: 100%;
            border: 1px solid var(--color-blue-2);
            margin-top: 24px;
            color: var(--color-blue-4);
        }
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 0px;
`;


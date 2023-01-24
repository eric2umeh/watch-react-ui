import React, { useState } from 'react'
import styled from 'styled-components';
import { CheckBox, TextField } from '../../../../ui/core';
import {breakpoints as bp} from '../../../../globalStyles/GlobalStyles';
import { Button } from '../../../../ui'; 

function CreateTrip() {

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
            <div className="first">
                <p className="heading">Note*</p>
                {/* <p className="note">This is a section for specific instructions should be followed before creating a employee</p> */}
                <ul>
                    <li>Customer service creates the trip.</li>
                    <li>Branch Managers approve/rejects the created trip.</li>
                    <li>Make sure every trip detail is correct before submitting.</li>
                    <li>Your branch rating is highly affected by the trip's auhtencity.</li>
                </ul>
            </div>
            <div>
                <div className="trip-div">
                    <form action="">
                        <select name="" id="">
                            <option value="">Departure</option>
                            <option value="">Okigwe, Anambra</option>
                            <option value="">Utako, Abuja</option>
                        </select>

                        <select name="" id="">
                            <option value="">Vehicle Number</option>
                            <option value="">ANU-343-NM</option>
                            <option value="">DKU-632-NM</option>
                        </select>

                        <TextField 
                            label="Price"
                            type="text"
                            value={creds.seat}
                            onChange={onChange}
                            name="seat"
                            id="seat"
                        />

                        <select name="" id="">
                            <option value="">Driver</option>
                            <option value="">Allison Beckers</option>
                            <option value="">Otondo Emmanuel</option>
                        </select>

                        <select name="" id="">
                            <option value="">Destination</option>
                            <option value="">Okigwe, Anambra</option>
                            <option value="">Utako, Abuja</option>
                        </select>

                        <select name="" id="">
                            <option value="">Air Condition</option>
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>
                    </form>

                    <form action="">
                        <TextField 
                            label=""
                            type="date"
                            value={creds.LastName}
                            onChange={onChange}
                            name="LastName"
                            id="LastName"
                        />

                        <TextField 
                            label=""
                            type="time"
                            value={creds.LastName}
                            onChange={onChange}
                            name="LastName"
                            id="LastName"
                        />

                        <select name="" id="">
                            <option value="">Snacks</option>
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>

                        <textarea name="" id="" placeholder='Add short note here if applicable...' cols="45" rows="4" />

                        <div className="seat">
                            <p className="seat-no">Save trip For next time</p>
                            <CheckBox /> 
                        </div>

                        <ButtonDiv>
                            <Button>
                                NEXT
                            </Button>
                        </ButtonDiv>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default CreateTrip

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .first {
        margin: 0px 0px 0 20px;

        .heading {
            font-size: var(--fsize-6);
            color: var(--color-blue-4);
            text-align: start;
        }

        .note {
            text-align: start;
            color: var(--color-blue-4);
            margin-top: 3px;
        }

        ul {
            text-align: start;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 5px 17px;
            color: var(--color-blue-4);

            li {
                list-style-type: disc;
                padding: 10px 17px;
            }
        }
    }

    .trip-div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: -10px 20px;
        grid-gap: 50px;

        @media only screen and (max-width: ${bp.desktop}) {
            grid-template-columns: 1fr;
            margin: -15px 10px 0 10px;
            grid-gap: 0px;
        }

        form {
            text-align: start;
        }

        select {
            padding: 12px;
            border-radius: 5px;
            width: 100%;
            border: 1px solid var(--color-blue-2);
            margin-top: 24px;
            color: var(--color-blue-4);
        }

        .seat {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;

        p {
            color: var(--color-blue-4);
        }
    }

        textarea {
            margin-top: 25px;
            border: 1px solid var(--color-blue-2);
        }
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
`;



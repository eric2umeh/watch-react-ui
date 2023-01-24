import React, { useState } from 'react'
import styled from 'styled-components';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';
import { Button } from '../../ui';
import { TextField } from '../../ui/core';

function AddEmployeeModal() {

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
                <p className="note">This is a section for specific instructions should be followed before creating a employee</p>
                <ul>
                    <li>Do not recreate a employee</li>
                    <li>Do not recreate a employee</li>
                    <li>Do not recreate a employee</li>
                    <li>Do not recreate a employee</li>
                </ul>
            </div>

            <div className="second">
                <form action="">

                    <TextField 
                        label="Email"
                        type="text"
                        value={creds.phone}
                        onChange={onChange}
                        name="phone"
                        id="phone"
                    />
                    
                    <select name="" id="">
                        <option value="destination">Role</option>
                        <option value="destination">Manager</option>
                        <option value="destination">Driver</option>
                    </select>

                    <select name="" id="">
                        <option value="destination">Branch</option>
                        <option value="destination">Enugu Branch</option>
                        <option value="destination">Abuja Branch</option>
                    </select>

                    <ButtonDiv>
                        <Button>
                            Add Employee
                        </Button>
                    </ButtonDiv>
                </form>
            </div>
        </Container>
    )
}

export default AddEmployeeModal

const Container = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 0.5fr;
    margin: 0px 20px 0 20px;
    grid-gap: 20px;

    @media only screen and (max-width: ${bp.desktop}) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
    }

    .first {

        .heading {
            font-size: var(--fsize-6);
            margin-top: 30px;
            color: var(--color-blue-4);
            text-align: start;
        }

        .note {
            text-align: start;
            color: var(--color-blue-4);
            margin-top: 10px;
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

    .second {
        text-align: start;

        p {
            font-size: var(--fsize-6);
            margin-bottom: 20px;

            @media only screen and (max-width: ${bp.desktop}) {
                margin: 20px 0; 
            }
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
    margin-top: 30px;
`;


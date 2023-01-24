import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../ui';
import { TextField } from '../../ui/core';

function VehicleFilter() {

    const [creds, setCreds] = useState({
        service: '',
        email: '',
        date: '',
    });

    const onChange = (e) => {
        setCreds((prevCreds) => ({
        ...prevCreds,
        [e.target.name]: e.target.value,
        }));
    };

    return (
        <Container>
            <form>
                <TextField 
                    label="Choose vehicle name"
                    type="text"
                    value={creds.service}
                    onChange={onChange}
                    name="service"
                    id="service"
                />

                <select name="" id="">
                    <option value="destination">Vehicle Type</option>
                    <option value="destination">Sienna</option>
                    <option value="destination">Hiace</option>
                </select>

                <select name="" id="">
                    <option value="destination">Vehicle Type</option>
                    <option value="destination">Sienna</option>
                    <option value="destination">Hiace</option>
                </select>
                
                <ButtonDiv>
                    <Button
                        type="submit" 
                        color="light"
                    >
                        Apply
                    </Button>
                </ButtonDiv>
            </form>
        </Container>
    )
}

export default VehicleFilter

const Container = styled.div`
    padding: 20px 10px;
    text-align: start;

    .status {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: var(--color-blue-4);
        margin-top: 30px;
    }

    select {
        padding: 12px;
        border-radius: 5px;
        width: 100%;
        border: 1px solid var(--color-blue-2);
        margin-top: 24px;
        color: var(--color-blue-4);
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;
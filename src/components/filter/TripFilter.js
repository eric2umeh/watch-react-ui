import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../ui';
import { TextField } from '../../ui/core';

function TripFilter() {

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
                    label=""
                    type="date"
                    value={creds.service}
                    onChange={onChange}
                    name="service"
                    id="service"
                />

                <TextField 
                    label="Price"
                    type="text"
                    value={creds.service}
                    onChange={onChange}
                    name="service"
                    id="service"
                />

                <select name="" id="">
                    <option value="destination">Destination</option>
                    <option value="destination">Enugu, Nsukka</option>
                    <option value="destination">Ajala, Lagos</option>
                </select>

                <select name="" id="">
                    <option value="destination">Vehicle Number</option>
                    <option value="destination">abc123be</option>
                    <option value="destination">WDH423be</option>
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

export default TripFilter

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
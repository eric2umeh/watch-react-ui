import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../ui';
import { CheckBox, TextField } from '../../ui/core';

function Filter() {

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
                    label="Choose service"
                    value={creds.service}
                    onChange={onChange}
                    name="service"
                    id="service"
                />

                <div className="seat">
                    <p className="seat-no">Seat Number</p>
                    <CheckBox /> 
                    <p>1 - 10</p>
                    <CheckBox />
                    <p>11 - 20</p>
                    <CheckBox />
                    <p>21 - 70</p>
                </div>

                <TextField 
                    label="Company email"
                    type="email"
                    value={creds.email}
                    onChange={onChange}
                    name="email"
                    id="email"
                />

                <TextField 
                    label="Date"
                    type="text"
                    value={creds.date}
                    onChange={onChange}
                    name="date"
                    id="date"
                />

                <div className="status">
                    <p>Status</p>
                    <input type="radio" />
                    <p>Paid</p>
                    <input type="radio" />    
                    <p>Pending</p>                
                </div>

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

export default Filter

const Container = styled.div`
    padding: 20px 10px;
    text-align: start;

    .seat {
        display: flex;
        justify-content: space-evenly;
        margin-top: 30px;
        margin-bottom: 10px;

        .seat-no {
            color: var(--color-blue-4);
        }

        p {
            color: var(--color-blue-3);
        }
    }

    .status {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: var(--color-blue-4);
        margin-top: 30px;
    }
`;


const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;
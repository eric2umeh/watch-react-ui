import React, { useState } from 'react'
import styled from 'styled-components';
import { TextField } from '../../ui/core';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';
import { Button } from '../../ui';

function EditTripModal() {

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
            {/* <div> */}
                <div className="customer">
                    <form action="">
                        <TextField 
                            label="Price"
                            type="text"
                            value={creds.seat}
                            onChange={onChange}
                            name="seat"
                            id="seat"
                        />

                        <textarea name="" id="" cols="36" rows="4" />
                    </form>
                </div>
            {/* </div> */}

            <ButtonDiv>
                <Button>
                    NEXT
                </Button>
            </ButtonDiv>
        </Container>
    )
}

export default EditTripModal

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .customer {
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

        textarea {
            margin-top: 25px;
            border: 1px solid var(--color-blue-2);
        }
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;



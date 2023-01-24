import React, { useState } from 'react'
import styled from 'styled-components';
import { CheckBox, TextField } from '../../../ui/core';
import {breakpoints as bp} from '../../../globalStyles/GlobalStyles';
import { Button } from '../../../ui'; 
import NavTab from './components/NavTab';

function AddTripModal() {

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
            <NavTab/>
        </Container>
    )
}

export default AddTripModal

const Container = styled.div`

`;


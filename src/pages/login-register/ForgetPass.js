import React from 'react'
import styled from 'styled-components'
import { ForgetPassForm } from '../../components'

function ForgetPass() {
    return (
        <Container>
            <ForgetPassForm/>
        </Container>
    )
}

export default ForgetPass


const Container = styled.div`
    margin: 66px;
`;
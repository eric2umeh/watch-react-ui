import React from 'react'
import { LoginRegisterForm } from '../../components';
import Rectangle26 from "../../assets/images/illustrations/rectangle26.svg";
import Rectangle27 from "../../assets/images/illustrations/rectangle27.svg";
import styled from 'styled-components';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';

function LoginRegister() {
    return (
        <Container>
            <div className="start"></div>
            <div className="mid">
                <div className="images">
                    <img className="img-1" src={Rectangle26} alt="" />
                    <img src={Rectangle27} alt="" />
                </div>
                <LoginRegisterForm/>
            </div>
            <div className="end"></div>
        </Container>
    )
}

export default LoginRegister


const Container = styled.div`
    display: grid;
    margin-top: 93px;
    grid-template-columns: 1fr 2fr 1fr;

    @media only screen and (max-width: ${bp.tablet}) {
        margin: 33px;
        grid-template-columns: 1fr;
    }

    .images {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;

        .img-1 {
            margin-right: 17px;
        }
    }
`;
import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../../../ui';
import { Message, TextField } from '../../../ui/core'
import Eye from "../../../assets/images/illustrations/eye.svg";
import EyeOff from "../../../assets/images/illustrations/eye-off.svg";
import {breakpoints as bp} from '../../../globalStyles/GlobalStyles';

function ChangePasswordForm() {

    const [creds, setCreds] = useState({
        newPassword: '',
        oldPassword: '',
        confirmPassword: '',
    });
    const [passwordShown1, setPasswordShown1] = useState(false)
    const [passwordShown2, setPasswordShown2] = useState(false)
    const [passwordShown3, setPasswordShown3] = useState(false)

    const togglePassword1 = () => {
        setPasswordShown1(!passwordShown1);
    };

    const togglePassword2 = () => {
        setPasswordShown2(!passwordShown2);
    };

    const togglePassword3 = () => {
        setPasswordShown3(!passwordShown3);
    };

    const [loading] = useState(false);
    const [error] = useState(null);

    const onChange = (e) => {
    setCreds((prevCreds) => ({
        ...prevCreds,
        [e.target.name]: e.target.value,
    }));
    };

    return (
        <Container>
            <div className="first-edit"></div>

            <div className='second-edit'>
                <form action="">

                    <label htmlFor="" className="password">
                        <TextField
                            label="Old Password"
                            value={creds.oldPassword}
                            onChange={onChange}
                            name="oldPassword"
                            id="oldPassword"
                            type={passwordShown1 ? "text" : "password"}
                        /> 
                        <span className="password__show" onClick={togglePassword1}>
                            { passwordShown1 ? (<img src={EyeOff} alt="" />) : (<img src={Eye} alt="" />) }
                        </span>
                    </label>

                    <label htmlFor="" className="password">
                        <TextField
                            label="New Password"
                            value={creds.newPassword}
                            onChange={onChange}
                            id="newPassword"
                            name="newPassword"
                            type={passwordShown2 ? "text" : "password"}
                        />
                        <span className="password__show" onClick={togglePassword2}>
                            { passwordShown2 ? (<img src={EyeOff} alt="" />) : (<img src={Eye} alt="" />) }
                        </span>
                    </label>

                    <label htmlFor="" className="password">
                        <TextField
                            label="Confirm Password"
                            value={creds.confirmPassword}
                            onChange={onChange}
                            name="confirmPassword"
                            id="confirmPassword"
                            type={passwordShown3 ? "text" : "password"}
                        />
                        <span className="password__show" onClick={togglePassword3}>
                            { passwordShown3 ? (<img src={EyeOff} alt="" />) : (<img src={Eye} alt="" />) }
                        </span>
                    </label>

                    <ButtonDivTwo>
                        <Button 
                            type="submit" 
                            loading={loading}
                            title= "SAVE"
                        />
                        <Message text={error} type="error" />   
                    </ButtonDivTwo>
                </form>
            </div>

            <div className="third-edit"></div>
        </Container>
    )
}

export default ChangePasswordForm

const Container = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin: 80px 0;

    @media only screen and (max-width: ${bp.tablet}) {
        grid-template-columns: 1fr;
    }

    .second-edit {
        background: var(--color-light);
        padding: 10px 30px 20px;
        border-radius: 10px;

        @media only screen and (max-width: ${bp.tablet}) {
            padding: 10px 20px 20px;
        }

        .password {
            display: block;
            position: relative;

            &__show{
                cursor: pointer;
                position: absolute;
                bottom: 11px;
                height: 16px;
                right: 0;
                padding: 0px 8px;
                font-weight: 700;
                font-size: .8em;
            }
        }
    }
`;

const ButtonDivTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0 15px;
    text-align: end;
    justify-content: center;
    
    @media only screen and (max-width: ${bp.tablet}) {
        text-align: center;
    }
`;

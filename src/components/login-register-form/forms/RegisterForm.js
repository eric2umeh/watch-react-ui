import { useState } from 'react';
import styled from 'styled-components';
import { CheckBox, Message, TextField } from '../../../ui/core';
import Eye from "../../../assets/images/illustrations/eye.svg";
import EyeOff from "../../../assets/images/illustrations/eye-off.svg";
import { Button } from '../../../ui';

function RegisterForm() {

    const [creds, setCreds] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phone_number: '',
        password: '',
    });

    const [passwordShown, setPasswordShown] = useState(false)

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const onChange = (e) => {
        setCreds((prevCreds) => ({
        ...prevCreds,
        [e.target.name]: e.target.value,
        }));
    };

    return (
        <Container>
            <form>
                <InputDiv>
                    <TextField
                        label="First Name"
                        type="text"
                        value={creds.firstName}
                        onChange={onChange}
                        name="firstName"
                        id="firstName"
                    />

                    <TextField
                        label="Last Name"
                        type="text"
                        value={creds.lastName}
                        onChange={onChange}
                        name="lastName"
                        id="lastName"
                    />
                </InputDiv>

                <TextField
                    label="Email"
                    type="email"
                    value={creds.email}
                    onChange={onChange}
                    name="email"
                    id="email"
                />

                <TextField
                    label="Phone Number"
                    type="text"
                    value={creds.phone_number}
                    onChange={onChange}
                    name="phone_number"
                    id="phone_number"
                />
                
                <label htmlFor="" className="password">
                    <TextField
                        className="password__input"
                        label="Password"
                        type={passwordShown ? "text" : "password"}
                        value={creds.password}
                        onChange={onChange}
                        name="password"
                        id="password"
                    />
                    <span className="password__show" onClick={togglePassword}>
                        { passwordShown ? (<img src={EyeOff} alt="" />) : (<img src={Eye} alt="" />) }
                    </span>
                </label>

                <MessageDiv>
                    <Message type='error' text='Password does not match' />
                </MessageDiv>

                <AgreementDiv>
                    <CheckBox />
                    <span>Agree with the User Agreement Conainernd Privacy Policy</span>
                </AgreementDiv>

                <ButtonDiv>
                    <Button
                        size={7}
                    >
                        CREATE AN ACCOUNT
                    </Button>
                </ButtonDiv>
            </form>
        </Container>
    );
}

export default RegisterForm;


const Container = styled.div`

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
`;

const InputDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

const MessageDiv = styled.div`
    display: flex;
    justify-content: end;
`;

const AgreementDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0px;

    span {
        margin-left: 30px;
        color: var(--color-blue-3);
        font-size: var(--fsize-4);
        line-height: var(--lheight-4);
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;
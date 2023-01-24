import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextField } from '../../../ui/core';
import Eye from "../../../assets/images/illustrations/eye.svg";
import EyeOff from "../../../assets/images/illustrations/eye-off.svg";
import { Button } from '../../../ui';

function LoginForm() {

    const [creds, setCreds] = useState({
        firstName: '',
        lastName: '',
        email: '',
        Address: '',
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
                <TextField
                    label="Email"
                    type="email"
                    value={creds.email}
                    onChange={onChange}
                    name="email"
                    id="email"
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

                <ButtonDiv>
                    <Button
                        size={7}
                    >
                        Sign In
                    </Button>
                </ButtonDiv>

                <Link to="/forgot-password">
                    <p>Forgot Password</p>
                </Link>
            </form>
        </Container>
    );
}

export default LoginForm;


const Container = styled.div`
    p {
        margin-top: 20px;
        text-align: center;
        text-decoration: underline;
        color: var(--color-blue-1);
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
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;
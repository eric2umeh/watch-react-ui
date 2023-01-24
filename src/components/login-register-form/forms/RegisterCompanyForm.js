import { useState } from 'react';
import styled from 'styled-components';
import { CheckBox, Message, TextField } from '../../../ui/core';
import Eye from "../../../assets/images/illustrations/eye.svg";
import EyeOff from "../../../assets/images/illustrations/eye-off.svg";
import { Button } from '../../../ui';

function RegisterCompanyForm() {

    const [creds, setCreds] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phone_number: '',
        account_name: '',
        account_number: '',
        rc_number: '',
        id_photo: '',
        cac_photo: '',
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
                        label="Company Name"
                        type="text"
                        value={creds.firstName}
                        onChange={onChange}
                        name="firstName"
                        id="firstName"
                    />

                    <TextField
                        label="Company Address"
                        type="text"
                        value={creds.lastName}
                        onChange={onChange}
                        name="lastName"
                        id="lastName"
                    />
                </InputDiv>

                <TextField
                    label="Company Email"
                    type="email"
                    value={creds.email}
                    onChange={onChange}
                    name="email"
                    id="email"
                />

                <TextField
                    label="Company Phone Number"
                    type="text"
                    value={creds.phone_number}
                    onChange={onChange}
                    name="phone_number"
                    id="phone_number"
                />

                <TextField
                    label="Company Account Number"
                    type="number"
                    value={creds.account_number}
                    onChange={onChange}
                    name="account_number"
                    id="account_number"
                />

                <TextField
                    label="Your Identity Document"
                    type="number"
                    value={creds.id_photo}
                    onChange={onChange}
                    name="id_photo"
                    id="id_photo"
                />

                <TextField
                    label="CAC Document"
                    type="number"
                    value={creds.account_number}
                    onChange={onChange}
                    name="account_number"
                    id="account_number"
                />

                <TextField
                    label="Company Account Number"
                    type="number"
                    value={creds.cac_doc}
                    onChange={onChange}
                    name="cac_doc"
                    id="cac_doc"
                />

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

export default RegisterCompanyForm;


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
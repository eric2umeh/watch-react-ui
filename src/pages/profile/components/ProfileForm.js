
import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, ButtonAdd } from '../../../ui';
import { Message, TextField } from '../../../ui/core'
// import Person from '../../../assets/images/pictures/mohammed.svg'
import Person from '../../../assets/images/pictures/hiace.jpg'
import {breakpoints as bp} from '../../../globalStyles/GlobalStyles';
import Download from "../../../assets/images/illustrations/download.svg";

function ProfileForm() {

    const [creds, setCreds] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        rcNumber: '',
    });

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
            <div className='heading'>
                <div id="title">
                    <p>Edit Your Profile</p>
                </div>

                <div className="profile">
                    <img id='img-1' src={Person} alt='' />

                    <ButtonDivOne>
                        <ButtonAdd 
                            outline 
                            bg="light"
                            // size="3"
                            // title= "Upload Your Picture"
                            // imgIcon={Download}
                        >
                            <label htmlFor="file" className="button-upload">
                                <img src={Download} alt="" />
                                {/* <p>Upload Your Picture</p> */}
                            </label>
                        </ButtonAdd>
                    </ButtonDivOne>
                    <input 
                        type="file"
                        id="file"
                        style={{display: "none"}}
                    />
                </div>
            </div>

            <div className='edit'>
                <div className="left">
                    <form action="">
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
                            value={creds.lastName}
                            type="text"
                            name="lastName"
                            onChange={onChange}
                            id="lastName"
                        />
                        <TextField
                            label="Contact Number"
                            type="text"
                            value={creds.phone}
                            onChange={onChange}
                            name="phone"
                            id="phone"
                        />
                    </form>
                </div>

                <div className="right">
                    <form action="">
                        <TextField
                            label="Email"
                            type="email"
                            value={creds.email}
                            // onChange={onChange}
                            name="email"
                            id="email"
                        />
                        <TextField
                            label="Address"
                            type="text"
                            value={creds.address}
                            onChange={onChange}
                            name="address"
                            id="address"
                        />

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
            </div>
        </Container>
    )
}

export default ProfileForm

const Container = styled.div`
    
    margin: 50px 0;
    padding: 40px;
    background: var(--color-light);
    border-radius: 10px;

    .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;

        #title {
            font-size: var(--fsize-6);
            color: var(--color-blue-3);
        }

        .profile {
            display: flex; 
            flex: 0.2;
            justify-content: space-between;
            align-items: end;

            @media only screen and (max-width: ${bp.tablet}) {
                flex: 0.4;
            }

            #img-1 {
                width: 60px;
                height: 60px;
                border-radius: 30%;
            }

            .button-upload {
                display: flex;
                align-items: center;
                
                img {
                    width: 1.3rem;
                    height: 1.3rem;
                    -webkit-transform:rotate(180deg);
                    -moz-transform: rotate(180deg);
                    -ms-transform: rotate(180deg);
                    -o-transform: rotate(180deg);
                    transform: rotate(180deg);
                }
            }
        }
    }

    .edit {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;

        @media only screen and (max-width: ${bp.tablet}) {
            grid-template-columns: 1fr;
            gap: 0px;
        }
    }
`;

const ButtonDivOne = styled.div`

`;

const ButtonDivTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    text-align: end;
    justify-content: center;
    
    @media only screen and (max-width: ${bp.tablet}) {
        text-align: center;
    }
`;


import { useState } from "react";
import { Message, TextField } from "../../../ui/core";
import styled from "styled-components";
import { Button } from "../../../ui";

function ForgotPasswordForm() {

    const [creds, setCreds] = useState({
        email: '',
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
        <StyledHome>
            <PassForm>

                <h3>Recover Your Password</h3>

                <form >
                    <TextField
                        label="Email"
                        type="email"
                        value={creds.email}
                        onChange={onChange}
                        name="email"
                        id="email"
                    />

                    <ButtonDiv>
                        <Button 
                            type="submit" 
                            loading={loading}
                            size={7} 
                        >
                            Verify
                        </Button>
                    </ButtonDiv>
                    
                    <Message text={error} type="error" />
                </form>
            </PassForm>
        </StyledHome>
    );
}

export default ForgotPasswordForm;



const StyledHome = styled.div`

`;

const PassForm = styled.div`
    margin: 60px 0 20px;

    h3{
        margin-bottom: 60px;
        color: var(--color-dark);
        font-weight: 700;
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;
import React from 'react'
import styled from 'styled-components'
import { Button } from '../../ui';

function ConfirmModal({ note, close }) {

    return (
        <Container>

            <div>Are you sure you want to <span>{note}</span>?</div>

            <ButtonDiv>
                <Button onClick={close} size={6} className="button-1" bg="red-1">
                    Cancel
                </Button>

                <Button size={6}>
                    Continue
                </Button>
            </ButtonDiv>
        </Container>
    )
}

export default ConfirmModal

const Container = styled.div`
    padding: 30px 10px;

    div {
        font-size: var(--fsize-7);
        color: var(--color-blue-3);
        text-align: center;
    }
`;

const ButtonDiv = styled.div`
    margin-top: 30px;

    .button-1 {
        margin-right: 20px;
    }
`;
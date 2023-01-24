import React from 'react'
import styled, { css } from 'styled-components'

function Toaster({toasts}) {
    return (
        <Wrapper>
            {toasts.map((toast, i) => (
                <Toast className="toast" type={toast.type} key={i}>
                    {toast.text}
                </Toast> 
            ))}
        </Wrapper>
    )
}

export default Toaster

const Wrapper = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 280px;
`;

const Toast = styled.div`
    background: #fefefe;
    border: #ccc 1px solid;
    box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.2);
    padding: 15px;
    margin-top: 15px;
    ${props => props.type === 'success' && css`
        background-color: ForestGreen;
        border: none;
        color: white;
    `};
    ${props => props.type === 'error' && css`
        background-color: Tomato;
        border: none;
        color: black;
    `};
`;

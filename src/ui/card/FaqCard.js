import React from 'react';
import styled from 'styled-components';

function FaqCard({ src, title, description }) {
    return (
        <Container className='card'>
            <div className="card__info">
                <img src={src} alt=""/>
                <span>{title}</span>
            </div>
            <p>{description}</p>
        </Container>
    )
}

export default FaqCard


const Container = styled.div`
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
    cursor: pointer;

    .card__info {
        display: flex;
        align-items: center;
        border-radius: var(--bradius-4);
        padding: 22px 13px 12px;

        span {
            font-size: 18px;
            color: var(--color-blue-4);
            margin: auto;
        }
    }

    p {
        font-size: var(--fsize-4);
        color: var(--color-gray-1);
        padding: 13px 13px 30px;
    }
`;
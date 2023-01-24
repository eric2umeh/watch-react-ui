import React from 'react'
import styled from "styled-components";
import List from './List';

export default function TravellerCard() {
    return (
        <Container>
            <Info>List of travellers</Info>
            <FirstHalve>
                <Letter>Name</Letter>
                <Stat>Status</Stat>
            </FirstHalve>
            <List num={1.} person='Ebuka Umeh'paid='Paid' />
            <List num={2} person='Ebuka Umeh' paid='Unpaid' color='var(--color-red-1)' />
            <List num={3} person='Ebuka Umeh' paid='Paid' />
            <List num={4} person='Ebuka Umeh' paid='Unpaid' color='var(--color-red-1)' />
            <List num={5} person='Tom Umeh' paid='Paid' />
        </Container>
    )
}

const Container=styled.div`
    background:  var(--color-red-1-light);
    margin-left:22px;
    margin-top:24px;
    height: 329px;
    width: 311px;
    border-radius: var(--bradius-4);
`

const Info = styled.h2`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-6);
    line-height: var(--lheight-7);
    padding-left: 27px;
    padding-top:20px;
    color: rgba(22,42,117, 1)
`
const FirstHalve=styled.div`
    display:flex;
    flex-direction: row;
    padding-left: 27px;
    padding-top:22px;
`
const Letter=styled.h3`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color: rgba(22,42,117, 1)
`

const Stat=styled.h3`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color: rgba(22,42,117, 1);
    padding-left: 127px;
`
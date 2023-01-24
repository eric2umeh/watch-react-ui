import React from 'react'
import styled from "styled-components";

export default function List({num, person, paid, color}) {
    return (
        <FirstHalve>
                <Letter>
                    <Number>{num}.</Number>
                    <Candidate>{person}</Candidate>
                </Letter>
                <Stat color={color}>{paid}</Stat>
        </FirstHalve>
    )
}

const FirstHalve=styled.div`
    display:flex;
    flex-direction: row;
    padding-left: 27px;
    padding-top:22px;
`
const Letter=styled.div`
    width:57%;
    display:flex;
    flex-direction: row;
`
const Number=styled.h3`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color: rgba(22,42,117, 1)
`
const Candidate=styled.h3`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color: rgba(22,42,117, 1);
    padding-left:5px;
`

const Stat=styled.h3`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    color:  ${props => props.color || 'var( --color-green-1)'};
`

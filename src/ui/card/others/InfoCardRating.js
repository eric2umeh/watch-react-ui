import React from 'react'
import styled from "styled-components";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoCardRating({text, icon, rating, color, Color }) {
    return (
        <RectangularBox>
            <FirstHalve>   
                <Box color={color}>
                    <Icon src={icon} />
                </Box>
                <Word>{text}</Word>
            </FirstHalve>
            <SecondHalve>
                <div>
                    {Array(rating).fill().map((i)=>(  
                        <FontAwesomeIcon icon={faStar} style={{ color: Color}} className="pl-10" size="sm" />
                    ))}
                </div>
            </SecondHalve>
        </RectangularBox>
    )
}

const RectangularBox=styled.div`
    width:647px;
    height:68px;
    margin-left:26px;
    margin-top:22px;
    border: 1.5px solid var(--color-blue-2);
    border-radius: var(--bradius-2)
    display: flex;
    flex-direction: row-reverse;
`
const FirstHalve=styled.div`
    width:74%;
    display:flex;
    flex-direction: row;
    border-right:1.5px solid var(--color-blue-2);
    height:68px;
`
const SecondHalve=styled.div`
    display:flex;
    flex-direction: row;
    margin-left:490px;
    margin-top:-45px;
`
const Box = styled.div`
    width:44px;
    height:44px;
    background: ${props => props.color || 'var(--color-blue-2)'};
    border-radius:var(--bradius-1);
    margin-top:12px;
    margin-left:22px;
    margin-right:12px;
`
const Icon = styled.img`
    padding:12px 9.5px
`

const Word=styled.h3`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-4);
    line-height: var(--lheight-4);
    padding-left: 13px;
    padding-top:26px;
`

const Avatar=styled.div`
    padding-left:5px
`
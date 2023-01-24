import React, {useState} from 'react'
import styled from "styled-components";
import TabContent1 from './TabContent1';
import TabContent2 from './TabContent2';
import TabContent3 from './TabContent3';

export default function TabNavCard() {
    const [index, setIndex]= useState(0)

    return (
        <Container>
            <Info>Activities</Info>
                <TabContainer>
                    <div className={`box1 ${index===0 ? 'active-tab': null}`}>
                        <h2 onClick={()=>{setIndex(0)}} className={'first_letter'}>All</h2>
                    </div>
                    <div className={`box2 ${index===1 ? 'active-tab': null}`}>
                        <h2 onClick={()=>{setIndex(1)}} className={'second_letter'}>Booking</h2>
                    </div>
                    <div className='box5' />
                    <div className={`box3 ${index===2 ? 'active-tab': null}`}>
                        <h2 onClick={()=>{setIndex(2)}}className={'third_letter'}>Trip</h2>
                    </div>
                </TabContainer>
                <Dash />
                <BlockContainer>
                    <div className='block' hidden={index !==0}>
                        <TabContent1 />
                    </div>
                    <div className='block' hidden={index !==1}>
                        <TabContent2 />
                    </div>
                    <div className='block' hidden={index !==2}>
                        <TabContent3 />
                    </div>
                </BlockContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color:var(--color-light);
    cursor: pointer;
    width: 744px;
    height: 590px;
    border-radius: var(--bradius-4);
    margin-left:357px;
`

const Info = styled.h2`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-5);
    font-size: var( --fsize-6);
    line-height: var(--lheight-7);
    padding-left: 53px;
    padding-top:21px;
    color: var(--color-black-1);
`
const TabContainer = styled.div`
    padding-left: 52px;
    padding-top:14px;
    width: 100%;
    display:flex;
    flex-direction:row;
    
    .box1{
        padding-bottom:11px;
        padding-right: 25px;
    }
    
    .box2{
        padding-bottom:11px;
        margin-left: 15px;
    }

    .box3{
        padding-bottom:11px;
        padding-left: 30px;
    }

    .box5{
        padding-bottom:11px;
        width: 5%;
    }

    .first_letter{
        font-family: var(--calibri-font);
        font-weight: var(--fweight-4);
        font-size: var( --fsize-4);
        line-height: var(--lheight-4);
        color: var(--color-blue-3);
        padding-left: 15px;
        width: 25%;
    }

    .second_letter{
        font-family: var(--calibri-font);
        font-weight: var(--fweight-4);
        font-size: var( --fsize-4);
        line-height: var(--lheight-4);
        color: var(--color-blue-3);
        padding-left:25px;
        width: 25%;
    }

    .third_letter{
        font-family: var(--calibri-font);
        font-weight: var(--fweight-4);
        font-size: var( --fsize-4);
        line-height: var(--lheight-4);
        color: var(--color-blue-3);
        padding-right:26px
    }

    .active-tab{
        color: var(--color-blue-4);
        border-bottom: 2px solid var(--color-blue-1);
    }
`
const Dash = styled.div`
    width:230px;
    height: 2px;
    background-color: rgba(218, 226, 255, 1);
    margin-top:-2px;
    margin-left: 53px;
`
const BlockContainer = styled.div`
    .block{
        margin-top:32px;
        margin-left:54px;
    }
`
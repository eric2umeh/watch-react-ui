import React from 'react'
import styled from "styled-components";
import InfoCardBox from './InfoCardBox';
import Arrivalbus from '../../assets/images/illustrations/arrivalbus.png';
import Airconditioner from '../../assets/images/illustrations/airconditioner.png';
import Popcorn from '../../assets/images/illustrations/popcorn.png';
import Edit from '../../assets/images/illustrations/edit.png';
import Download from '../../assets/images/illustrations/download.png';
import InfoCardRating from './InfoCardRating';

export default function InfoCard() {
    return (
        <Container>
            <Info>More Info</Info>
          
            <InfoCardBox icon={Arrivalbus} icons={Edit} text='vehicle type' letter='SEDAN 2020' />
            <InfoCardBox icon={Airconditioner} icons={Edit} text='Airconditioner' letter='Yes' />
            <InfoCardBox icon={Popcorn} icons={Edit} text='Snacks' letter='No' />
            <InfoCardBox icon={Arrivalbus} color={' rgba(242, 153, 74, 0.3)'} icons={Edit} text='Ticket' letter='$50,000'  />
            <InfoCardRating icon={Arrivalbus} color={'rgba(242, 153, 74, 0.3)'} Color={'rgba(242, 201, 76, 1)'} text='Reviews' rating={5}  />
            <Buton>
                <FirstHalve>   
                  <Icon src={Download} alt="Logo" />
                  <Word>DOWNLOAD TRIP DETAILS</Word>
                </FirstHalve>
            </Buton>
        </Container>
    )
}

const Container=styled.div`
    background: white;
    margin-left:20px;
    margin-top:0px;
    height: 594px;
    width: 715px;
    radius: var(--bradius-4);
`

const Info = styled.h2`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-4);
    font-size: var( --fsize-6);
    line-height: var(--lheight-7);
    padding-left: 26px;
    padding-top:17px;
    color: rgba(22,42,117, 1)
`
const Buton=styled.div`
    width:191.15px;
    height:39.15px;
    margin-top: 39px;
    margin-left: 482px;
    border: 1.5px solid var(--color-blue-1);
    border-radius: var(--bradius-2)
`
const FirstHalve=styled.div`
    padding:5px
`
const Icon = styled.img`
    padding-top:5px;
`
const Word=styled.h3`
    font-family: var(--calibri-font);
    font-weight: var(--fweight-7);
    font-size: var( --fsize-3);
    line-height: var(--lheight-2);
    padding-left: 25px;
    margin-top:-20px;
    color:var(--color-blue-1);
`
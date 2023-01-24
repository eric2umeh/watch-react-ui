import React from 'react'
import styled from 'styled-components';
import Vehicle from "../../assets/images/illustrations/vehicle.svg";
import AirCondition from "../../assets/images/illustrations/aircondition.svg";
import Snacks from "../../assets/images/illustrations/snacks.svg";
import Vehicle2 from "../../assets/images/illustrations/vehicle2.svg";
import Edit from "../../assets/images/illustrations/edit.svg";
import Download from "../../assets/images/illustrations/download.svg";
import { ButtonAdd } from '..';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';
import { StarRating } from '../core';

function TripCard({ titleInner }) {
    return (
        <Container>
            <p className="trip-head">More Info</p>

            <div className="inner-inputs">
                <div className="first-inputs">
                    <img src={Vehicle} alt="" />
                    <p>Price</p>
                </div>
                <div className="middle-inputs"></div>
                <div className="second-inputs">
                    <p>₦10,000</p>
                    <img src={Edit} alt="" />
                </div>
            </div>

            <div className="inner-inputs">
                <div className="first-inputs">
                    <img src={Vehicle2} alt="" />
                    <p>Rating</p>
                </div>
                <div className="middle-inputs"></div>
                <div className="second-inputs">
                    <p><StarRating /></p>
                </div>
            </div>

            <div className="inner-inputs">
                <div className="first-inputs">
                    <img src={AirCondition} alt="" />
                    <p>Air Condition</p>
                </div>
                <div className="middle-inputs"></div>
                <div className="second-inputs">
                    <p>Yes</p>
                </div>
            </div>

            <div className="inner-inputs">
                <div className="first-inputs">
                    <img src={Snacks} alt="" />
                    <p>Snacks</p>
                </div>
                <div className="middle-inputs"></div>
                <div className="second-inputs">
                    <p>No</p>
                </div>
            </div>

            <div className="inner-inputs">
                <div className="first-inputs">
                    <img src={Vehicle2} alt="" />
                    <p>Vehicle No.</p>
                </div>
                <div className="middle-inputs"></div>
                <div className="second-inputs">
                    <p>BWE-383-EU</p>
                </div>
            </div>

            <ButtonDiv>
                <ButtonAdd 
                    outline 
                    size="6"
                    title= "DOWNLOAD TRIP DETAILS"
                    imgIcon={Download}
                />
            </ButtonDiv>

        </Container>
    )
}

export default TripCard


const Container = styled.div`
    padding: 20px;
    background: var(--color-light);
    border-radius: 10px;

    .trip-head {
        font-size: var(--fsize-5);
        color: var(--color-blue-4);
        margin-bottom: 20px;
    }

    .inner-inputs {
        display: grid;
        grid-template-columns: 2.7fr 3fr 3fr;
        border: 1px solid var(--color-blue-2);
        margin-bottom: 15px;

        @media only screen and (max-width: ${bp.tablet}) {
            display: grid;
            grid-template-columns: 3fr 0fr 4fr;
            font-size: var(--fsize-3);
        }

        .first-inputs {
            display: flex;
            align-items: center;
            padding: 10px 20px;

            @media only screen and (max-width: ${bp.tablet}) {
                display: flex;
                margin-left: -10px;

                img {
                    width: 23px;
                    height: 23px;
                }
            }

            p {
                margin-left: 15px;

                @media only screen and (max-width: ${bp.tablet}) {
                    margin-left: 10px;
                }
            }
        }
        
        .second-inputs {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 1px solid var(--color-blue-2);
            padding: 10px 20px;

            @media only screen and (max-width: ${bp.tablet}) {
                display: flex;
                justify-content: space-between;
                font-size: var(--fsize-3);

                p {
                    text-align: start;
                }
            }

            img {
                width: 15px;
                height: 15px;
            }
        }
    }
`;

const ButtonDiv = styled.div`
    margin-bottom: 5px;
    text-align: end;
    
    @media only screen and (max-width: ${bp.tablet}) {
        text-align: center;
    }
`;
import React, {useState} from 'react'
import styled from "styled-components";
import {breakpoints as bp} from '../../../../globalStyles/GlobalStyles';
import CreateTrip from './CreateTrip';
import SavedTrip from './SavedTrip';

export default function NavTab() {
    const [index, setIndex]= useState(0)

    return (
        <Container>
            <nav>
                <ul className="tabs">
                    <li className={` ${index===0 ? 'active' : null} `}>
                        <span onClick={()=>{setIndex(0)}}>Create Trip</span>
                    </li>
                    <li className={` ${index===1 ? 'active' : null} `}>
                        <span onClick={()=>{setIndex(1)}}>Saved Trips</span>
                    </li>
                </ul>
            </nav>

            <div hidden={index !==0}>
                <CreateTrip />
            </div>
            <div hidden={index !==1}>
                <SavedTrip />
            </div>
        </Container>
    )
}


const Container = styled.div`

    nav {
        display: flex;
        padding: 0px 0px 15px 20px;

        @media only screen and (max-width: ${bp.tablet}) {
            display: flex;
            /* justify-content: center; */
        }

        .tabs {
            display: flex;
            list-style: none;
            margin: 0px;
            padding: 0px;
            text-decoration: none;

            span {
                color: var(--color-blue-3);
                text-decoration: none;
            }

            li {
                font-size: var(--fsize-6);
                padding: 9px 25px;
                border-bottom: 3px solid var(--color-blue-2);
                cursor: pointer;

                @media only screen and (max-width: ${bp.tablet}) {
                    padding: 5px 10px;
                    font-size: var(--fsize-6);
                }
            }

                > .active {
                border-bottom: 3px solid var(--color-blue-1);
            }
        }
    }
`

import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import {breakpoints as bp} from '../../../globalStyles/GlobalStyles';

const LoginRegisterForm = () => {
    const [index, setIndex]= useState(0)

    return (
        <Container>
            <nav>
                <ul className="tabs">
                    <li className={` ${index===0 ? 'active' : null} `}>
                        <span onClick={()=>{setIndex(0)}}>LOGIN</span>
                    </li>
                    <li className={` ${index===1 ? 'active' : null} `}>
                        <span onClick={()=>{setIndex(1)}}>REGISTER</span>
                    </li>
                </ul>
            </nav>

            <div>
                {/* <p id="head">Welcome to Swiss</p> */}
                {/* <p id="bodys">Create an account to begin.</p> */}
            </div>

            <div hidden={index !==0}>
                <LoginForm />
            </div>
            <div hidden={index !==1}>
                <RegisterForm/>
            </div>

        </Container>
    );
};

export default LoginRegisterForm;


const Container = styled.div`

    nav {

        .tabs {
            display: flex;
            justify-content: center;

            span {
                color: var(--color-blue-3);
                text-decoration: none;
                font-size: var(--fsize-4);
                line-height: var(--lheight-2);

                @media only screen and (max-width: ${bp.tablet}) {
                    font-size: var(--fsize-4);
                }
            }

            li {
                padding: 1rem 20%;
                border-bottom: 2px solid var(--color-blue-2);
                cursor: pointer;

                @media only screen and (max-width: ${bp.desktop}) {
                    padding: 1rem 18%;
                }
            }

            > .active {
                border-bottom: 2px solid var(--color-blue-1);
            }
        }
    }

    #head {
        padding: 10px 0;
        font-size: var(--fsize-9);
    }

    #bodys {
        padding: 10px 0;
        font-size: var(--fsize-7);
        color: var(--color-blue-3);
    }
`;
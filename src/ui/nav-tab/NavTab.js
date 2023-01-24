import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../../components/login-register-form/forms/LoginForm";
import RegisterForm from "../../components/login-register-form/forms/RegisterForm";

const NavTab = () => {
    const [index, setIndex]= useState(0)

    return (
        <Container>
            <nav>
                <ul className="tabs">
                    <li className={` ${index===0 ? 'active' : null} `}>
                        <span onClick={()=>{setIndex(0)}}>All</span>
                    </li>
                    <li className={` ${index===1 ? 'active' : null} `}>
                        <span onClick={()=>{setIndex(1)}}>Available</span>
                    </li>
                </ul>
            </nav>

            <div hidden={index !==0}>
                <LoginForm />
            </div>
            <div hidden={index !==1}>
                <RegisterForm/>
            </div>
        </Container>
    );
};

export default NavTab;


const Container = styled.div`

    nav {
        display: flex;
        padding: 5px 10px;

        .tabs {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0px;
            text-decoration: none;

            span {
                color: var(--color-blue-3);
                text-decoration: none;
                font-size: var(--fsize-4);
                line-height: var(--lheight-2);
            }

            li {
                padding: 7px 107px;
                border-bottom: 2px solid var(--color-blue-2);
            }

            > .active {
                border-bottom: 2px solid var(--color-blue-1);
            }
        }
    }
`;
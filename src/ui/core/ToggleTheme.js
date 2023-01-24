import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { useEffect } from "react";

function ToggleTheme(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
            // localStorage.setItem("theme", "dark");
        } else {
            props.setTheme("light");
            // localStorage.setItem("theme", "light");
        }
    };

    const icon = props.theme === "light" ? 
    (<i className="bx bx-moon nav__moon" id="theme-button"></i>) : 
    (<i className="bx bx-sun nav__sun" id="theme-button"></i>)
    // <HiMoon size={20} /> : <CgSun size={20} /> 

    return (
        <>       
        <Container onClick={changeTheme}>
            {icon}
        </Container>
        </>

    );
};

export default ToggleTheme;

const Container = styled.div`
    cursor: pointer;
    color: ${(props) => props.theme.titleColor};
    font-size: 1.25rem;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
`;

const Toggle = styled.button`
    cursor: pointer;
    /* height: 20px; */
    /* width: 20px;    */
    /* border-radius: 50%; */
    /* border: none; */
    /* background-color: ${props => props.theme.titleColor}; */
    /* color: ${props => props.theme.pageBackground}; */
    &:focus {
        /* outline: none; */
    }
    /* transition: all .5s ease; */
`;

const Page = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
  /* width: 100%; */
  /* background-color: ${props => props.theme.pageBackground}; */
  /* transition: all .5s ease; */
`;

const Title = styled.h1`
    /* color: ${props => props.theme.titleColor}; */
    /* transition: all .5s ease; */
`;

const TagLine = styled.span`
    /* color: ${props => props.theme.tagLineColor}; */
    /* font-size: 18px; */
    /* transition: all .5s ease; */
`;

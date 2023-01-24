import styled, { css } from "styled-components";
import { Divider, IconButton } from ".";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';

function Modal(props) {
    return (
        <ModalWrapper show={props.show}>
            <ModalContent width={props.width} height={props.height}>

                <div className="scroller">
                    <div>
                        <span className="title">{props.title}</span>
                        {props.divider ? (<span className="divider"><Divider /></span>) : ""} 
                        <div className="close" onClick={props.close}>
                            <IconButton>
                                <FontAwesomeIcon icon={faTimes} />
                            </IconButton>
                        </div>
                    </div>
                    {props.children}
                </div>

            </ModalContent>
        </ModalWrapper>
    );
}

export default Modal;


const ModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out !important;
    pointer-events: none;
    

    ${props => props.show && css`
        opacity: 1;
        pointer-events: all;
    `};

    @media only screen and (min-width: ${bp.desktop}) {
        left: 7rem;
    }
`;

const ModalContent = styled.div`
    background-color: white;
    border-radius: var(--bradius-2);
    max-width: calc(100% - 60px);
    max-height: calc(100% - 60px);
    position: relative;
    overflow: hidden;
    margin-top: 60px;

    @media only screen and (max-width: ${bp.desktop}) {
        margin-top: 60px;
    }

    .scroller {
        position: relative;
        padding: 20px;
        max-height: calc(100vh - 60px);
        overflow: hidden;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 7px;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--color-blue-1);
            border-radius: var(--bradius-2);
        }
            ::-webkit-scrollbar-thumb:hover {
            background: var(--color-blue-4);
        }
        
        .title {
            position: absolute;
            top: 20px;
            left: 40px;
            /* margin-right: 140px; */
            color: var(--color-blue-4);
            font-size: var(--fsize-8);
            line-height: var(--lheight-10);
            font-family: var(--ralewaysans-font);

            @media only screen and (max-width: ${bp.desktop}) {
                font-size: var(--fsize-6);
            }
        }

        .divider {  
            position: relative;
            top: 25px;
            left: 0;
        }

        .close {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 1;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
        }
    }
    
    ${(props) =>
        props.width &&
        css`
        width: ${props.width}px;
        `}
    ${(props) =>
        props.height &&
        css`
        height: ${props.height}px;
    `}
`;


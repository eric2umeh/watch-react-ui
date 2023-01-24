import styled, { css } from "styled-components";
import { Loading } from "../core";
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';

function ButtonAdd(props) {
    props = { ...props, loading: Number(props.loading || 0) };
    return ( 
        <ButtonStyled {...{ ...props, disabled: props.loading || props.disabled }}>
            <span className="body">
                <img className="img" src={props.imgIcon} alt="" />
                {props.title ? ( <span>{props.title}</span> ) : "" }
                {props.children ? ( <span className="children">{props.children}</span> ) : "" }
            </span>
            {props.loading ? ( <span className="loading"><Loading /> </span>) : ""}
        </ButtonStyled>
    );
}

export default ButtonAdd;


const ButtonStyled = styled.button.attrs((p) => {
    const bg = p.bg || "blue-1";
    const size = p.size || 6; 
    return {
        bg,
        color: p.color || `${bg}-light`,
        size,
    };
})`
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: var(--color-${(p) => p.bg});
    color: var(--color-${(p) => p.color});
    height: var(--space-${(p) => p.size});
    width: auto;
    padding: 0 calc(var(--space-${(p) => p.size}) * 0.3);
    font-weight: bold;
    border-radius: var(--bradius-2);
    font-size: var(--fsize-${(p) => p.size - 3}, var(--fsize-1));
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;

    .body {
        display: flex;
        align-items: center;

        .img {
            margin-right: 3px;

            @media only screen and (max-width: ${bp.tablet}) {
                margin-left: -8px;
            }
        }
        
        .children {
            position: relative;
            width: 100%;
            text-align: start;
        }
    }

    &:enabled:hover {
        background-color: var(
            --color-${(p) => p.bg}-hover,
            var(--color-${(p) => p.bg})
        );
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
    }
    &:enabled:active,
    &:disabled {
        box-shadow: none;
        box-shadow: inset 0px 2px 6px 1px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        opacity: 0.6;
    }
    ${(props) =>
    props.outline &&
    css`
        border-color: var(--color-${(p) => p.bg});
        background-color: transparent;
        color: var(--color-${(p) => p.bg});
        &:enabled:hover {
            background-color: var(--color-${(p) => p.bg});
            /* color: var(--color-${(p) => p.bg}-light); */
            color: white;
        }
        &:enabled:active {
            background-color: var(
                --color-${(p) => p.bg}-hover,
                var(--color-${(p) => p.bg})
            );
        }
    `}
    ${(p) => p.loading && css`
        span.body {
            opacity: 0
        }
        span.loading {
            position:absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: var(--fsize-${p => Number(p.size) - 1});
            display: flex;
            align-items: center;
            justify-content: center; 
        }
    `}
`;
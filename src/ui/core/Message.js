import styled, { css } from "styled-components";

function Message({ text, type, imgSrc, imgSrc2 }) {
    return (
        <>
            {text && (
                <PStyled type={type} className={type}>

                    <Outer>
                        <div>
                            <span className="img">
                                <img className="img-1" src={imgSrc} alt=""/>
                            </span>
                            <span className="inner">
                                {text}
                            </span>
                        </div>
                        <span className="img-2">
                            <img src={imgSrc2} alt=""/>
                        </span>
                    </Outer>
                </PStyled>
            )}
        </>
    );
}

export default Message;


const PStyled = styled.p`
    padding: 10px;
    border: 1px solid lightGray;
    font-size: 12px;
    border-radius: var(--bradius-2);

    ${(props) =>
    props.type === "error" &&
    css`
        border-color: transparent;
        color: var(--color-red-1);
        line-height: var(--lheight-3);
    `};

    ${(props) =>
    props.type === "error-msg" &&
    css`
        border-color: transparent;
        color: var(--color-light);
        background-color: var(--color-red-1);
        font-size: 18px;
        line-height: var(--lheight-7);
        height: 49px;
    `};

    ${(props) =>
    props.type === "success" &&
    css`
        border-color: transparent;
        background-color: var(--color-green-1);
        color: var(--color-light);
        font-size: 18px;
        line-height: var(--lheight-7);
        height: 49px;
    `};

    ${(props) =>
    props.type === "warning" &&
    css`
        border-color: transparent;
        background-color: var(--color-yellow-1);
        color: var(--color-light);
        font-size: 18px;
        line-height: var(--lheight-7);
        height: 49px;
    `};
`;

const Outer = styled.div`
    display: flex;
    justify-content: space-between;

    .img {
        position: relative;
    }

    .img-1 {
        position: absolute;
    }
    .img-2 {
        cursor: pointer;
    }
    .inner {
        margin-left: 56px;
    }
`;
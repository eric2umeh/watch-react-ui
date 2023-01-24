import React from 'react';
import styled from 'styled-components';
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';

function Details ({ 
    body, 
    header,
    titleCard,
    imgProfile,
    imgEdit,
    imgDelete,
    altProfile,
    altEdit,
    altDelete,
    onClickEdit,
    onClickDelete,
    onClickProfile,
    padding = "auto",
    paddingBody= "auto",
    margin = "auto",
}) {
    return (
        <Container>
            <div style={{ padding: padding, margin: margin, }}>
                <div className="row">
                    <div className="blocks">
                        <div className="column left heading-details">
                            <div>{titleCard}</div>
                        </div>
                        <div className="column right">
                            {imgProfile ? (<img className='employee-image' src={imgProfile} alt={altProfile} onClick={onClickProfile}/>) : ""}
                        </div>
                    </div>

                    {body.length > 0 && ( 
                        <>
                            <div className="column left">
                                {header.map((headerItem, index) => (
                                    <div className='data-body' style={{ padding: paddingBody }} key={index}>{headerItem}</div>
                                ))}
                            </div>
                                    
                            <div className="column right">
                                {Object.values(body).map((obj, index) => (
                                    <div key={index}>
                                        {Object.values(obj).map((value, index2) => (
                                            <>
                                                <div className='data-body' style={{ padding: paddingBody }} key={index2}>{value}</div>
                                            </>
                                        ))}
                                        <div className="images">
                                            {imgEdit ? (<img className="images-1" src={imgEdit} alt={altEdit} onClick={onClickEdit}/>) : ""}
                                            {imgDelete ? (<img className="images-2" src={imgDelete} alt={altDelete} onClick={onClickDelete}/>) : ""}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Container> 
    )
}

export default Details 


const Container = styled.div`
    border-radius: 10px;
    color: var(--color-blue-4);
    background: var(--color-light);

    @media only screen and (max-width: ${bp.tablet}) {
        padding: 0px;
    }

    .heading-details {
        font-size: var(--fsize-6);
        color: var(--color-black-1);
        padding: 10px;
    }
    
    .column {
        float: left;
    }
    
    .left {
        width: 25%;
    }
    
    .right {
        width: 75%;
        text-align: end;
    }
    
    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    hr {
        border: 1px solid var(--color-blue-2);
    }

    img {
        width: 60px;    
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
    }

    .blocks {
        display: flex;
    }

    .images-1 {
        width: 30px;    
        height: 30px;
        margin-right: 20px;
        cursor: pointer;
    }

    .images-2 {
        width: 30px;    
        height: 30px;
        cursor: pointer;
    }
`
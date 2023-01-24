import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { excerpt } from "../../functions/stringFn";
import {breakpoints as bp} from '../../globalStyles/GlobalStyles';

function Table({
    body,
    header,
    overflow,
    imgEdit,
    imgDelete,
    altEdit,
    altDelete,
    onClickEdit,
    onClickDelete,
    detailsPage,
}) {

    return (
        <Container>
            <div style={{ overflow: overflow }} className="table-wrapper">
                {body.length > 0 && (
                    <table
                        cellSpacing="0"
                        className="table table-striped table-hover"
                    >
                        <thead>
                            <tr>
                                {header.map((headerItem, index) => (
                                    <th key={index}>{headerItem}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="table-body">
                            {Object.values(body).map((obj, index) => (
                                <tr key={index}>
                                    {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>
                                        <Link className="link-table" to={{pathname: detailsPage}}>{excerpt(value)}</Link> 
                                    </td>
                                    ))}
                                    <div className="images">
                                        {imgEdit ? (<img src={imgEdit} alt={altEdit} onClick={onClickEdit}/>) : ""}
                                        {imgDelete ? (<img src={imgDelete} alt={altDelete} onClick={onClickDelete}/>) : ""}
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </Container>
    )
}

export default Table


const Container = styled.div`

    .table-wrapper {
        background: var(--light-1);
        height: 30rem;
        
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 5px;
            background: var(--color-blue-2);
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: var(--color-blue-4);
            border-radius: var(--bradius-2);
        }
    }
    
    table {
        width: 100%;
        text-align: center;
    }

    th {    
        color: var(--color-blue-4);
        font-size: var(--fsize-4);
        font-weight: var(--fweight-4);
        
        @media only screen and (max-width: ${bp.tablet}) {
            font-size: var(--fsize-4);

            :nth-child(n+3) {
                display: none;
            }
            :nth-last-child(1){
                display: flex;
                justify-content: center;
            }
        }
    }
    
    table.table tr th, 
    table.table tr td {
        padding: 15px 0px;
        
        @media only screen and (max-width: ${bp.desktop}) {
            padding: 10px 0;
        }
    }
    
    table.table tr td {
        cursor: pointer;
        
        @media only screen and (max-width: ${bp.tablet}) {
            padding: 10px 0px;
            cursor: pointer;

            :nth-child(n+3) {
                display: none;
            }
        }
    }

    .table-body {
        font-size: var(--fsize-4);
        color: var(--color-blue-3);

        @media only screen and (max-width: ${bp.tablet}) {
            font-size: var(--fsize-4);
        }

        .link-table {
            text-decoration: none;
            color: var(--color-blue-3);
        }
    }
    
    .images {
        margin-top: 12px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;

        @media only screen and (max-width: ${bp.tablet}) {
            display: flex;
            justify-content: space-evenly;
        }
    }

    table.table-striped.table-hover tbody tr:hover {
        background: #f5f5f5;
    }
`;
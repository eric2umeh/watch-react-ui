import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { IconButton, StarRating } from "../core";
import styled from "styled-components";

export const DashTable = () => {

  return (
    <Container>
        <div className="table-responsive">
            <div className="table-wrapper">
                <table className="table table-striped table-hover">
                    
                    <tbody className="table-body">
                        <tr>
                            <td>
                                <IconButton>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </IconButton>
                            </td>
                            <td>Ojo, Barracks Abuja</td>
                            <td>5/5</td>
                            <td><StarRating /></td>
                            <td>view</td>
                        </tr>

                        <tr>
                            <td>
                                <IconButton>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </IconButton>
                            </td>
                            <td>Maitama Bridge, Kaduna</td>
                            <td>3/5</td>
                            <td><StarRating /></td>
                            <td>view</td>
                        </tr>

                        <tr>
                            <td>
                                <IconButton>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </IconButton>
                            </td>
                            <td>Maitama Bridge, Kaduna</td>
                            <td>4/5</td>
                            <td><StarRating /></td>
                            <td>view</td>
                        </tr>

                        <tr>
                            <td>
                                <IconButton>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </IconButton>
                            </td>
                            <td>Maitama Bridge, Kaduna</td>
                            <td>0/5</td>
                            <td><StarRating /></td>
                            <td><span className='view'>view</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    </Container>
  )
};

export default DashTable;


const Container = styled.div`
    display: flex;
    flex-direction: column;

    .table-responsive {
        /* margin: 0px 0px 5px; */
    }

    .table-wrapper {
        background: #fff;
        /* padding: 10px; */
        /* height: 279px; */
        display: block;
        border-radius: 20px;

        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 5px;
            background: var(--color-blue-4);
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: var(--color-blue-2);
            border-radius: var(--bradius-2);
        }
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 255, 0.5);
        }

        @media only screen and (max-width: 978px) {
            background: #fff;
            padding: 0px 5px;
        }
    }
    
    table {
        width:100%;
        text-align: center;

        @media only screen and (max-width: 855px) {
            max-height: 170px;
        }
    }

    table.table tr th, 
    table.table tr td {
        /* padding: 5px; */
    }

    .table-body {
        font-size: var(--fsize-4);
    }

    tr td:nth-child(5) {
        text-decoration: underline;
        color: var(--color-blue-1);
    }

    table.table-striped.table-hover tbody tr:hover {
        background: #f5f5f5;
    }

`;
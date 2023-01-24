import React, { useState } from "react";
import { Modal, StarRating } from "../../core";
import styled from "styled-components";
import Location2 from "../../../assets/images/illustrations/location2.svg";
import { AddBookingModal, AddBranchModal, AddVehicleModal, AddTripModal, FeedbackModal } from "../../../components";


export const DashTable = () => {

    const [isModal, setIsModal] = useState(false);
    const modalShow = (v) => setIsModal(v);
    const [isModal1, setIsModal1] = useState(false);
    const modalShow1 = (v) => setIsModal1(v);
    const [isModal2, setIsModal2] = useState(false);
    const modalShow2 = (v) => setIsModal2(v);
    const [isModal3, setIsModal3] = useState(false);
    const modalShow3 = (v) => setIsModal3(v);
    const [isModal4, setIsModal4] = useState(false);
    const modalShow4 = (v) => setIsModal4(v);

    return (
        <Container>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <td></td>
                                <td>Name</td>
                                <td></td>
                                <td>Rating</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            <tr>
                                <td><img src={Location2} alt="" /></td>
                                <td>Ojo, Barracks Abuja</td>
                                <td>5/5</td>
                                <td><StarRating /></td>
                                <td onClick={modalShow.bind(this, true)}>
                                    view
                                </td>

                                <Modal 
                                    title="Create Trip" 
                                    show={isModal}
                                    close={modalShow.bind(this, false)}
                                    divider
                                    width="900"
                                >
                                    <AddTripModal />
                                </Modal>
                            </tr>

                            <tr>
                                <td><img src={Location2} alt="" /></td>
                                <td>Maitama Bridge, Kaduna</td>
                                <td>3/5</td>
                                <td><StarRating /></td>
                                <td onClick={modalShow1.bind(this, true)}>view</td>

                                <Modal 
                                    title="Add new order" 
                                    show={isModal1}
                                    close={modalShow1.bind(this, false)}
                                    divider
                                    // height="700"
                                    width="900"
                                >
                                    <AddBookingModal />
                                </Modal>
                            </tr>

                            <tr>
                                <td><img src={Location2} alt="" /></td>
                                <td>Maitama Bridge, Kaduna</td>
                                <td>4/5</td>
                                <td><StarRating /></td>
                                <td onClick={modalShow2.bind(this, true)}>view</td>

                                <Modal 
                                    title="Add new vehicle" 
                                    show={isModal2}
                                    close={modalShow2.bind(this, false)}
                                    divider
                                    // height="700"
                                    width="900"
                                >
                                    <AddVehicleModal />
                                </Modal>
                            </tr>

                            <tr>
                                <td><img src={Location2} alt="" /></td>
                                <td>Maitama Bridge, Kaduna</td>
                                <td>0/5</td>
                                <td><StarRating /></td>
                                <td><span className='view' onClick={modalShow3.bind(this, true)}>view</span></td>
                                <Modal 
                                    title="Add New Branch" 
                                    show={isModal3}
                                    close={modalShow3.bind(this, false)}
                                    divider
                                    // height="400"
                                    width="900"
                                >
                                    <AddBranchModal />
                                </Modal>
                            </tr>

                            <tr>
                                <td><img src={Location2} alt="" /></td>
                                <td>Maitama Bridge, Kaduna</td>
                                <td>3/5</td>
                                <td><StarRating /></td>
                                <td><span className='view' onClick={modalShow4.bind(this, true)}>view</span></td>
                                <Modal 
                                    title="Add New Branch" 
                                    show={isModal4}
                                    close={modalShow4.bind(this, false)}
                                    divider
                                    // height="400"
                                    width="900"
                                >
                                    <FeedbackModal />
                                </Modal>
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
    }
    
    table {
        width:100%;
        text-align: center;

        @media only screen and (max-width: 855px) {
            max-height: 170px;
        }
    }

    th {    
        color: var(--color-blue-4);
        font-size: var(--fsize-4);
        font-weight: var(--fweight-4);
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
        cursor: pointer;
    }

    table.table-striped.table-hover tbody tr:hover {
        background: #f5f5f5;
    }

`;
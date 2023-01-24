import React, { useState } from 'react';
import Filter from "../../assets/images/illustrations/filter.svg";
import Add from "../../assets/images/illustrations/add2.svg";
import { Button, Modal } from '../../ui/core';
import styled from 'styled-components';
import { Table } from '../../ui';
import { body1, booking } from "../../ui/table/components/dataTable";
import Edit from "../../assets/images/illustrations/edit.svg";
import Trash from "../../assets/images/illustrations/trash.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import LoginRegisterForm from '../login-register-form/nav-tab/LoginRegisterForm';

function AddBooking() {

    const [isModal, setIsModal] = useState(false);

    const modalShow = (v) => setIsModal(v);

    return (
        <Container>
            <div className="button">
                <img src={Filter} alt="Filter" />
                <Button
                    size={6}
                    onClick={modalShow.bind(this, true)}
                    imgIcon={Add}
                    title="Add Booking"
                />
            </div>

            <Modal
                title="Add new vehicle"
                divider
                show={isModal}
                close={modalShow.bind(this, false)}
            >
                <LoginRegisterForm/>
            </Modal>

            <Table
                body={body1} 
                header={booking} 
                overflow="hidden"
                imgEdit={Edit} 
                imgView={<FontAwesomeIcon icon={faEye} />}
                imgDelete={Trash} 
                altEdit="Edit"
                altDelete="Delete"
            />
        </Container>
    )
}

export default AddBooking


const Container = styled.div`
    .button {
        display: flex;
        align-items: center;
    }
`;
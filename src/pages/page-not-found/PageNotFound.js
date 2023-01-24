import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Page } from '../../ui/core';

function PageNotFound() {

    let location = useLocation();
    const navigate = useNavigate();

    return(
    <Page>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for "<code>{location.pathname}</code>" does not exist.</p>
        <Link 
            to="/"
        >
            Go Back
        </Link>
    </Page>
    )
}
export default PageNotFound;



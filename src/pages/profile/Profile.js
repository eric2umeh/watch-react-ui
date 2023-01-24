import React from 'react'
import { Page } from '../../ui/core'
import ProfileForm from './components/ProfileForm';

function Profile() {

    return (
        <Page
            title="Personal Profile"
        >
            <ProfileForm />
        </Page>
    )
}

export default Profile
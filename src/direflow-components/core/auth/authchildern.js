import React from 'react';
import { useState } from "react";
import AuthProvider from './auth-provider';


const SSOTest = () => {

    const [userStore, setUserStore] = useState({});

    const onSuccess = (userStore, resolvedurl) => {
        setUserStore(userStore);
    }

    return (
        <>
            <AuthProvider
                AuthUrl={"http://dev-sso-service.azurewebsites.net/generate?application=ROTHERT&redirectUrl=http://localhost:3000/"}
                UserStore={userStore}
                onSuccess={onSuccess}
            >
                <div>Dashboard Page</div>
                <div>User Details: {userStore}</div>
            </AuthProvider>
        </>
    )
}

export default SSOTest;
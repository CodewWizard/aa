import React from 'react';
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken'

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const AuthProvider = ({ children, AuthUrl, UserStore, onSuccess }) => {
    if (!AuthUrl) {
        console.error('AuthProvider:', 'Auth Url not provided');
        return;
    }

    return (
        <>
            <SSO AuthUrl={AuthUrl}
                UserStore={UserStore}
                onSuccess={onSuccess}>
                {children}
            </SSO>
        </>
    );
}

const SSO = (props) => {
    const { AuthUrl, onSuccess } = props;

    const [userState, setUserState] = useState({ loading: true, data: props?.UserStore, error: '' });
    const { origin, pathname, search } = window.location;
    const urlParams = new URLSearchParams(search);
    const token = urlParams.get('token');
    const error = urlParams.get('error');
    const logout_url = urlParams.get('logouturl');
    const resolvedurl = `${origin}${pathname}`;

    useEffect(() => {
        if (error) {
            setUserState({
                loading: false,
                data: {},
                error: error
            })
        }
        else if (token) {
            const decodedToken = jwt.decode(token);
            let tokenExpiryDate = new Date(parseInt(decodedToken.exp * 1000));
            if (tokenExpiryDate.getTime() < new Date().getTime()) {
                window.location.href = AuthUrl;
                return;
            }
            const result = {
                encodedJWT: token,
                JWTValidTill: tokenExpiryDate,
                decodedJWT: decodedToken
            };
            setUserState({
                loading: false,
                data: result
            })
        }
        else if (userState.data?.JWTValidTill) {
            let exp = new Date(userState.data.JWTValidTill);
            if (exp.getTime() < new Date().getTime()) {
                window.location.href = AuthUrl;
            } else {
                setUserState({
                    loading: false,
                    data: props?.UserStore
                })
            }
        } else {
            window.location.href = AuthUrl;
        }
    }, []);

    useEffect(() => {
        if (!userState.loading) {
            if (!userState.data) {
                console.error('AuthProvider:', 'onSuccess callback not provided');
            }
            if (onSuccess) {
                onSuccess(userState.data, resolvedurl, userState.error, logout_url);
            }
        }
    }, [userState.loading])

    return (
        <>
            {userState.loading && (<>...Loading</>)}
            {!userState.loading && props.children}
        </>
    )
}

export default AuthProvider;
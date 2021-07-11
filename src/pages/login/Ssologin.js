import React, { useEffect } from 'react';
import './login.page.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Ssologin = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const history = useHistory();

    const RedirectToLogin = () => {
        window.location.replace('http://localhost:5000/login');
    }
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/server',
            withCredentials: true
        })
        .then(response => {
            console.info(response.data.user, 'SAML');

            if (response.data.user.nameID)
            {
                dispatch({
                    type: 'User/OnLogin',
                    payload: {
                        login: response.data.user.nameID,
                        remember: true,
                        sessionId: 'NRviSpoYm7mdkYB4W2471l-01'
                    }
                });
                if (user.login && user.lastUrl) {
                    history.replace(user.lastUrl);
                } else {
                    history.replace('/');
                }
            }
            else
            {
                RedirectToLogin();    
            }
        })
        .catch(error => {
            console.error(error, 'SAML');
            RedirectToLogin();
        })
    }, []);
    return ( <div>
        <p>Redirecting...</p>
    </div>)
}


export default Ssologin;

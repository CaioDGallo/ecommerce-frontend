import api from './api'
import { AxiosResponse } from 'axios'
import { AuthAction, AuthTypes } from '../store/auth/types';
import { useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';

interface AuthAccessTokenObject {
    _id: string
    usermame: string
    accessToken: string
    success: boolean
}

export default function AuthComponent({ parent }) {
    //milliseconds
    const refreshDelay = 840000;
    let refreshTimer = null
    const dispatch = useDispatch()

    useImperativeHandle(parent, () => {
        return {
            refreshAccessToken: refreshAccessToken,
            startAuthComponent: startAuthComponent
        };
    });

    function startAuthComponent(){
        const startAuthComponent: AuthAction = {
            type: AuthTypes.SET_REFRESH_TOKEN,
            refreshToken: refreshAccessToken,
            actionUser: {
                _id: "",
                username: "",
                access_token: ""
            },
        }
        dispatch(startAuthComponent)
    }

    async function refreshAccessToken(): Promise<void> {
        //Refresh user access token to enable, if cookie is valid, 
        // to enable access to guarded routes
        const response: AxiosResponse = await api.post("/auth/refreshToken", {}, {
            withCredentials: true
        })

        const authObj: AuthAccessTokenObject = response.data

        console.log(authObj)
        clearInterval(refreshTimer)
        if (authObj.success) {
            startRefreshCountdown()
        } else {
            //TODO Redirect user to login
        }
    }

    function startRefreshCountdown(): void {
        refreshTimer = setInterval(() => {
            refreshAccessToken()
        }, refreshDelay)
    }

    return null
}
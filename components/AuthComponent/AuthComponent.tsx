import api from '../../services/api'
import { AxiosResponse } from 'axios'
import { AuthAction, AuthTypes } from '../../store/auth/types';
import { useImperativeHandle, Ref } from 'react';
import { useDispatch } from 'react-redux';

interface AuthAccessTokenObject {
    _id: string
    username: string
    accessToken: string
    success: boolean
}

interface AuthComponentProps{
    parentReference: Ref<unknown>
}

export default function AuthComponent(props:AuthComponentProps) {
    //milliseconds
    const refreshDelay = 840000
    let refreshTimer = null
    const dispatch = useDispatch()

    useImperativeHandle(props.parentReference, () => {
        return {
            refreshAccessToken: refreshAccessToken,
            startAuthComponent: startAuthComponent
        };
    });

    function startAuthComponent(): void {
        const startAuthComponent: AuthAction = {
            type: AuthTypes.SETUP_AUTH_SYSTEM,
            refreshToken: refreshAccessToken,
            logout: logout,
            actionUser: null,
        }
        dispatch(startAuthComponent)
    }

    function logout() {
        clearInterval(refreshTimer)
        api.post("/auth/logout", {}, {
            withCredentials: true
        })
    }

    async function refreshAccessToken(): Promise<void> {
        //Refresh user access token to enable, if cookie is valid, 
        // to enable access to guarded routes
        try {
            const response: AxiosResponse = await api.post("/auth/refreshToken", {}, {
                withCredentials: true
            })

            const authObj: AuthAccessTokenObject = response.data

            console.log(authObj)
            clearInterval(refreshTimer)
            if (authObj.success) {
                api.defaults.headers.common = {'Authorization': `Bearer ${authObj.accessToken}`}
                const setUserDataAction: AuthAction = {
                    type: AuthTypes.SET_USER_DATA,
                    refreshToken: null,
                    logout: null,
                    actionUser: {
                        _id: authObj._id,
                        username: authObj.username,
                        accessToken: authObj.accessToken
                    },
                }
                dispatch(setUserDataAction)
                startRefreshCountdown()
            } else {
                //TODO Redirect user to login
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    function startRefreshCountdown(): void {
        refreshTimer = setInterval(() => {
            refreshAccessToken()
        }, refreshDelay)
    }

    return null
}
import api from '../services/api'
import { AxiosResponse } from 'axios'

interface AuthAccessTokenObject{
    accessToken: string,
    success: boolean
}

//milliseconds
const refreshDelay = 870000;
let refreshTimer: NodeJS.Timer = null

export async function refreshAccessToken():Promise<void> {
    //Refresh user access token to enable, if cookie is valid, 
    // to enable access to guarded routes
    const response: AxiosResponse = await api.post("/auth/refreshToken", {}, {
        withCredentials: true
    })

    const authObj: AuthAccessTokenObject = response.data

    console.log(authObj)
    clearInterval(refreshTimer)
    if(authObj.success){
        startRefreshCountdown()
    }else{
        //TODO Redirect user to login
    }
}

export function startRefreshCountdown():void {
    refreshTimer = setInterval(() => {
        refreshAccessToken()
    }, refreshDelay)
}
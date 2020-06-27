import { AuthState, AuthUser, AuthAction, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
    stateUser: null,
    refreshToken: null,
    logout: null
}

export default function authReducer(state: AuthState = INITIAL_STATE, action: AuthAction): AuthState {    
    switch (action.type) {
        case AuthTypes.REFRESH_TOKEN:
            state.refreshToken()
            return {...state , stateUser:{ _id: action.actionUser._id, username: action.actionUser.username, accessToken: action.actionUser.accessToken }};
        case AuthTypes.LOGOUT:
            state.logout()
            return {...state, stateUser: null};
        case AuthTypes.SETUP_AUTH_SYSTEM:
            return { ...state, refreshToken: action.refreshToken, logout: action.logout };
        case AuthTypes.SET_USER_DATA:
            return { ...state, stateUser:{ _id: action.actionUser._id, username: action.actionUser.username, accessToken: action.actionUser.accessToken }};
        default:
            return state;
    }
}
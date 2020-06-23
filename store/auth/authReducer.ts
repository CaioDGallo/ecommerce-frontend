import { AuthState, AuthUser, AuthAction, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
    stateUser: null,
    refreshToken: null
}

export default function authReducer(state: AuthState = INITIAL_STATE, action: AuthAction): AuthState {    
    switch (action.type) {
        case AuthTypes.REFRESH_TOKEN:
            state.refreshToken()
            return state;
        case AuthTypes.LOGOUT:
            return state;
        case AuthTypes.SET_REFRESH_TOKEN:
            return { ...state, refreshToken: action.refreshToken };
        default:
            return state;
    }
}
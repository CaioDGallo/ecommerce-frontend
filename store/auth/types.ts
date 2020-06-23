import AuthComponent from '../../services/auth'
//Action Types
export enum AuthTypes {
    REFRESH_TOKEN = '@auth/REFRESH_TOKEN',
    LOGOUT = '@auth/LOGOUT',
    LOGIN = '@auth/LOGIN',
    SET_REFRESH_TOKEN = '@auth/SET_REFRESH_TOKEN'
};

//Data Types
export interface AuthUser {
    _id: string
    username: string
    access_token: string
}

//State Type
export interface AuthState{
    readonly stateUser: AuthUser
    readonly refreshToken: () => Promise<void>
}

//Action Type
export interface AuthAction{
    readonly actionUser: AuthUser
    readonly refreshToken: () => Promise<void>
    readonly type: AuthTypes
}
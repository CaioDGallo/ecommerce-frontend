//Action Types
export enum AuthTypes {
    REFRESH_TOKEN = '@auth/REFRESH_TOKEN',
    LOGOUT = '@auth/LOGOUT',
    SETUP_AUTH_SYSTEM = '@auth/SETUP_AUTH_SYSTEM',
    SET_USER_DATA = '@auth/SET_USER_DATA'
};

//Data Types
export interface AuthUser {
    _id: string
    username: string
    accessToken: string
}

//State Type
export interface AuthState{
    readonly stateUser: AuthUser
    readonly refreshToken: () => Promise<void>
    readonly logout: () => void
}

//Action Type
export interface AuthAction{
    readonly actionUser: AuthUser
    readonly refreshToken: () => Promise<void>
    readonly logout: () => void
    readonly type: AuthTypes
}
import styles from './nav_account_options.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { AuthUser, AuthAction, AuthTypes } from '../../store/auth/types'
import { ApplicationState } from '../../store'

export default function NavAccountOptions({ handleClick }) {
    const user: AuthUser = useSelector((state: ApplicationState) => state.auth.stateUser)
    const dispatch = useDispatch()

    function logout(){
        const logoutAction: AuthAction = {
            type: AuthTypes.LOGOUT,
            refreshToken: null,
            logout: null,
            actionUser: null,
        }
        dispatch(logoutAction)
    }
    
    return (
        <div className={styles.nav__account__container}>
            <p onClick={handleClick}>{user?user.username:"Login"}</p>
            <p onClick={logout}>Logout</p>
        </div>
    )
}
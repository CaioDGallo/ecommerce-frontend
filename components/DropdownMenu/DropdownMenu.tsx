import styles from './dropdown_menu.module.scss'
import { useDispatch } from 'react-redux'
import { AuthAction, AuthTypes } from '../../store/auth/types'

export default function DropdownMenu(props){
    const dispatch = useDispatch()

    function logout(){
        const logoutAction: AuthAction = {
            type: AuthTypes.LOGOUT,
            refreshToken: null,
            logout: null,
            actionUser: null,
        }
        dispatch(logoutAction)
        props.setOpen(false)
    }

    function DropdownItem(props){

        return (
            <a onClick={logout} className={styles.menu__item}>
                {props.children}

                {props.rightIcon && <span className={styles.icon__button}><img src={props.rightIcon}></img></span>}
            </a>
        )
    }

    return (
        <div className={styles.dropdown}>
            <DropdownItem>
                <p>Sair</p>
            </DropdownItem>
        </div>
    );
}
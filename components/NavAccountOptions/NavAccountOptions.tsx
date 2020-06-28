import styles from './nav_account_options.module.scss'
import { useSelector } from 'react-redux'
import { AuthUser } from '../../store/auth/types'
import { ApplicationState } from '../../store'
import { useState } from 'react'
import React from 'react'

export default function NavAccountOptions(props) {
    const user: AuthUser = useSelector((state: ApplicationState) => state.auth.stateUser)

    const [open, setOpen] = useState(false);
    
    return (
        <div className={styles.nav__account__container}>
            <a className={user?styles.user__name:styles.login__button} onClick={user?() => setOpen(!open):props.handleClick}>{user?user.username:"Entrar"}</a>
            
            {open && React.cloneElement(props.children, { setOpen: setOpen })}
        </div>
    )
}
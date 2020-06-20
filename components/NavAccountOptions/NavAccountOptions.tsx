import styles from './nav_account_options.module.scss'

export default function NavAccountOptions({ handleClick }) {
    return (
        <div className={styles.nav__account__container}>
            <p onClick={handleClick}>Caio Gallo</p>
        </div>
    )
}
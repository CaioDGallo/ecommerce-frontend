import styles from './login_modal.module.scss'
import { useRef, useState, useImperativeHandle } from 'react'

export default function LoginModal({ modalReference }) {
    const [showing, setShowing] = useState(false)

    let modal = useRef(null);

    const openModal = () => {
        setShowing(true)
    }

    function closeModal(modal, event) {
        if (event.target.id == "login_modal_open" || event.target.id == "close_modal") {
            setShowing(false)
        }
    }

    useImperativeHandle(modalReference, () => {
        return {
            openModal: openModal
        };
    });

    return (
        <div id={showing ? "login_modal_open" : "login_modal_hidden"} className={showing ? styles.modal__open : styles.modal__hidden} ref={modal} onClick={(event) => closeModal(modal, event)}>
            <div className={showing ? styles.modal__content__open : styles.modal__content__hidden}>
                <span onClick={(event) => closeModal(modal, event)} className={styles.close} id="close_modal">&times;</span>
                <p>Test Modal Login</p>
            </div>
        </div>
    );
}
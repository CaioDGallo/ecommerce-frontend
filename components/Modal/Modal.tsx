import CartModal from "../CartModal/CartModal"
import { useRef, Ref } from "react"

import styles from './modal.module.scss'
import LoginModal from "../LoginModal/LoginModal"
import NavAccountOptions from "../NavAccountOptions/NavAccountOptions"
import DropdownMenu from "../DropdownMenu/DropdownMenu"

export enum ModalTypes {
    CART_MODAL = "CartModal",
    LOGIN_MODAL = "LoginModal"
}

interface IModalProps {
    modalType: ModalTypes
}

export interface ModalReferenceObject {
    openModal: () => void
}

export interface IModalTypeProps {
    modalReference: Ref<ModalReferenceObject>
}

export default function Modal(props: IModalProps) {
    const modalReference = useRef<ModalReferenceObject>(null)

    const handleClick = ():void => {
        modalReference.current.openModal();
    };

    function handleCartModal() {
        switch (props.modalType) {
            case ModalTypes.CART_MODAL:
                return (
                    <div className={styles.modal__container}>
                        <CartModal />
                    </div>
                );
            case ModalTypes.LOGIN_MODAL:
                return (
                    <div className={styles.modal__container}>
                        <NavAccountOptions handleClick={handleClick}>
                            <DropdownMenu />
                        </NavAccountOptions>
                        <LoginModal modalReference={modalReference} />
                    </div>
                );
            default:
                return <p>No type</p>
        }
    }

    return handleCartModal()
}
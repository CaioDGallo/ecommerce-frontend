import CartModal from "../CartModal/CartModal"
import { useSelector } from "react-redux"
import { ProductsState } from "../../store/product/types"
import { useRef } from "react"

import styles from './modal.module.scss'
import LoginModal from "../LoginModal/LoginModal"
import NavAccountOptions from "../NavAccountOptions/NavAccountOptions"

export enum ModalTypes {
    CART_MODAL = "CartModal",
    LOGIN_MODAL = "LoginModal"
}

interface IModalProps {
    modalType: ModalTypes
}

export default function Modal(props: IModalProps) {
    const numberOfProducts = useSelector((state: ProductsState) => state.amountOfProducts)
    const modalReference = useRef(null)

    const handleClick = () => {
        modalReference.current.openModal();
    };

    function handleCartModal() {
        switch (props.modalType) {
            case ModalTypes.CART_MODAL:
                return (
                    <div className={styles.modal__container}>
                        <p className={styles.products__amount}>{numberOfProducts}</p>
                        <img onClick={handleClick} width="38" height="38" src={"/shopping_cart.png"} alt="" />
                        <CartModal modalReference={modalReference} />
                    </div>
                );
            case ModalTypes.LOGIN_MODAL:
                return (
                    <div className={styles.modal__container}>
                        <NavAccountOptions handleClick={handleClick}/>
                        <LoginModal modalReference={modalReference} />
                    </div>
                );
            default:
                return <p>No type</p>
        }
    }

    return handleCartModal()
}
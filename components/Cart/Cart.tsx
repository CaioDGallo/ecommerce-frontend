import CartModal from "../CartModal/CartModal"
import { useSelector } from "react-redux"
import { ProductsState } from "../../store/product/types"
import { useState, useRef } from "react"

import styles from './cart.module.scss'

export default function Cart() {
    const numberOfProducts = useSelector((state: ProductsState) => state.amountOfProducts)

    const modalReference = useRef(null)

    const handleClick = () => {
        modalReference.current.openModal();
    };

    return (
        <div className={styles.cart__container}>
            <p className={styles.products__amount}>{numberOfProducts}</p>
            <img onClick={handleClick} width="38" height="38" src={"/shopping_cart.png"} alt="" />
            <CartModal modalReference={modalReference} />
        </div>
    );

}
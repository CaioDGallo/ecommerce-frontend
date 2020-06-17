import CartModal from "../CartModal/CartModal"
import { useSelector } from "react-redux"
import { ProductsState } from "../../store/product/types"
import { useState } from "react"

import styles from './cart.module.scss'

export default function Cart() {
    const [parentModalReference, setParentModalReference] = useState(null)
    const numberOfProducts = useSelector((state: ProductsState) => state.amountOfProducts)

    var callbackFunction = (modal) => {
        setParentModalReference(modal)
    }

    return (
        <div className={styles.cart__container}>
            <p>{numberOfProducts}</p>
            <img onClick={() => parentModalReference.current.style.display = "block"} width="38" height="38" src={"/shopping_cart.png"} alt="" />
            <CartModal parentCallback={callbackFunction} />
        </div>
    );

}
import CartModal from "./CartModal"
import { useSelector } from "react-redux"
import { ProductsState } from "../store/product/types"
import { useState } from "react"

export default function Cart() {
    const [parentModalReference, setParentModalReference] = useState(null)
    const numberOfProducts = useSelector((state: ProductsState) => state.amountOfProducts)

    var callbackFunction = (modal) => {
        setParentModalReference(modal)
    }

    return (
        <>
            <img className="header__summary" onClick={() => parentModalReference.current.style.display = "block"} width="38" height="38" src={"/shopping_cart.png"} alt="" />
            <p>{numberOfProducts}</p>
            <CartModal parentCallback={callbackFunction} />
        </>
    );

}
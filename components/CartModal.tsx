
import { CartProduct, ProductsState } from '../store/product/types'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

import './CartModal.module.scss'
import { useEffect, useRef } from 'react'

export default function CartModal({ parentCallback }) {
    const products: CartProduct[] = useSelector((state: ProductsState) => state.data)
    const totalPrice: number = useSelector((state: ProductsState) => state.totalPrice)

    let modal = useRef(null);

    useEffect(() => {
        parentCallback(modal)
    }, [modal])

    function closeModal(modal, event){
        if(event.target.id == "cart_modal" || event.target.id == "close_modal"){
            modal.current.style.display = "none"
        }
    }

    return (
        <div id="cart_modal" className="modal" ref={modal} onClick={(event) => closeModal(modal, event)}>
            <div className="modal__content">
                <span onClick={(event) => closeModal(modal, event)} className="close" id="close_modal">&times;</span>
                <ul>
                    {products.map(product => (<CartItem key={product._id} product={product} />))}
                    <p>{totalPrice}</p>
                </ul>
            </div>
        </div>
    );
}
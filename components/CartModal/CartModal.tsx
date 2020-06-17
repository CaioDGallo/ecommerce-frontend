import { CartProduct, ProductsState } from '../../store/product/types'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'

import styles from './cart_modal.module.scss'
import { useEffect, useRef } from 'react'

export default function CartModal({ parentCallback }) {
    const products: CartProduct[] = useSelector((state: ProductsState) => state.products)
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
        <div id="cart_modal" className={styles.modal} ref={modal} onClick={(event) => closeModal(modal, event)}>
            <div className={styles.modal__content}>
                <span onClick={(event) => closeModal(modal, event)} className={styles.close} id="close_modal">&times;</span>
                <ul className={styles.cart_products_list}>
                    {products.map(product => (<CartItem key={product._id} product={product} />))}
                </ul>
                <p>{totalPrice}</p>
            </div>
        </div>
    );
}
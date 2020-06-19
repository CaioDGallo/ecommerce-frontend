import { CartProduct, ProductsState } from '../../store/product/types'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'

import styles from './cart_modal.module.scss'
import { useRef, useState, useImperativeHandle } from 'react'

export default function CartModal({ modalReference }) {
    const products: CartProduct[] = useSelector((state: ProductsState) => state.products)
    const totalPrice: number = useSelector((state: ProductsState) => state.totalPrice)
    const [showing, setShowing] = useState(false)

    let modal = useRef(null);

    const openModal = () => {
        setShowing(true)
    }

    function closeModal(modal, event) {
        if (event.target.id == "cart_modal_open" || event.target.id == "close_modal") {
            setShowing(false)
        }
    }

    useImperativeHandle(modalReference, () => {
        return {
            openModal: openModal
        };
    });

    return (
        <div id={showing ? "cart_modal_open" : "cart_modal_hidden"} className={showing ? styles.modal__open : styles.modal__hidden} ref={modal} onClick={(event) => closeModal(modal, event)}>
            <div className={showing ? styles.modal__content__open : styles.modal__content__hidden}>
                <div className={styles.modal__header}>
                    <div className={styles.cart__title}>
                        <img width="75" height="75" src={"/shopping_cart.png"} alt="" />
                        <h2>Carrinho</h2>
                    </div>
                    <span onClick={(event) => closeModal(modal, event)} className={styles.close} id="close_modal">&times;</span>
                </div>
                <ul className={styles.cart_products_list}>
                    {products.map(product => (<CartItem key={product._id} product={product} />))}
                </ul>
                <div className={styles.modal__footer}>
                    <div className={styles.modal__footer__total}>
                        <p>TOTAL</p>
                        <p>R${totalPrice}</p>
                    </div>
                    <div className={styles.modal__footer__checkout}>
                        <button className={styles.checkout__button}>Finalizar Pedido</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { CartProduct, ProductsTypes, ProductsAction } from '../../store/product/types'
import { useDispatch } from 'react-redux'

import styles from './cart_item.module.scss'

export interface ICartItemProps {
    product: CartProduct
}

export default function CartItem(props: ICartItemProps) {
    const dispatch = useDispatch();
    const currentProduct: CartProduct = props.product;

    function executeOnCart(type: ProductsTypes) {
        const cartAction: ProductsAction = {
            type: type,
            cartProduct: currentProduct
        }
        dispatch(cartAction)
    }

    return (
        <li className={styles.cart__item}>
            <div className={styles.product__image}>
                <img width="50" height="50" src={currentProduct.imagePath} alt="" />
            </div>
            <div className={styles.middle__section}>
                <p>{currentProduct.title}</p>
                <p>Quantidade: {currentProduct.amount}</p>
            </div>
            <div className={styles.buttons__section}>
                <span onClick={() => executeOnCart(ProductsTypes.REMOVE_PRODUCT_FROM_CART)} className={styles.close}>&times;</span>
                <p className={styles.cart__item__price}>R${currentProduct.price}</p>
                <div className={styles.amount__control}>
                    <button className={styles.control__button} onClick={() => executeOnCart(ProductsTypes.REMOVE_PRODUCT_AMOUNT)}>-</button>
                    <button className={styles.control__button} onClick={() => executeOnCart(ProductsTypes.ADD_PRODUCT_TO_CART)}>+</button>
                </div>
            </div>

        </li>
    )
}
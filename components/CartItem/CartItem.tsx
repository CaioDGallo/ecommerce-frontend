import { CartProduct, ProductsTypes, ProductsAction } from '../../store/product/types'
import { useDispatch } from 'react-redux'

import styles from  './cart_item.module.scss'

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
            <p>{currentProduct.title} - {currentProduct.price}</p>
            <p>{currentProduct.amount}</p>
            <button onClick={() => executeOnCart(ProductsTypes.REMOVE_PRODUCT_FROM_CART)}>
                Excluir</button>

            <button onClick={() => executeOnCart(ProductsTypes.REMOVE_PRODUCT_AMOUNT)}>-</button>
            <button onClick={() => executeOnCart(ProductsTypes.ADD_PRODUCT_TO_CART)}>+</button>
        </li>
    )
}
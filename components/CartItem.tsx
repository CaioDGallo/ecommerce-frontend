import { CartProduct, ProductsTypes } from '../store/product/types'
import { useDispatch } from 'react-redux'

export interface ICartItemProps {
    product: CartProduct
}

export default function CartItem(props: ICartItemProps) {
    const dispatch = useDispatch();
    const product: CartProduct = props.product;

    return (
        <>
            <p>{product.title} - {product.price}</p>
            <p>{product.amount}</p>
            <button onClick={() => dispatch({
                type: ProductsTypes.REMOVE_PRODUCT_FROM_CART,
                data: product
            }
            )}>Excluir</button>

            <button onClick={() => dispatch({
                type: ProductsTypes.REMOVE_PRODUCT_AMOUNT,
                data: product
            }
            )}>-</button>
            <button onClick={() => dispatch({
                type: ProductsTypes.ADD_PRODUCT_TO_CART,
                data: product
            }
            )}>+</button>
        </>
    )
}
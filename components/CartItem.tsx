import { Product, ProductsTypes } from '../store/product/types'
import { useDispatch } from 'react-redux'

export interface ICartItemProps{
    product: Product
}

export default function CartItem(props: ICartItemProps) {
    const dispatch = useDispatch();
    const product: Product = props.product;

    return (
        <>
            <p>{product.title} - {product.price}</p>
            <button onClick={() => dispatch({
                type: ProductsTypes.REMOVE_PRODUCT_FROM_CART,
                data: product
            }
            )}>Remove</button>
        </>
    )
}
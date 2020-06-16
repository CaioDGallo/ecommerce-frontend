import { Product, ProductsTypes, ProductsState } from '../store/product/types'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import CartItem from './CartItem'

export default function Cart() {
    const products: Product[] = useSelector((state: ProductsState) => state.data);
    const totalPrice: number = useSelector((state: ProductsState) => state.totalPrice);
    
    return (
        <ul>
            {products.map(product => (<CartItem key={product._id} product={product}/>))}
            <p>{totalPrice}</p>            
        </ul>
    );

}
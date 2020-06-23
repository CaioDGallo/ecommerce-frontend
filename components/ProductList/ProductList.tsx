import Product from "../Product/Product"
import { Product as IProduct } from '../../store/cart/types'

import styles from './product_list.module.scss'

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className={styles.product__list}>
      {props.products.map((product, index) => <Product product={product} key={index}/>)}
    </div>
  )
}
export default ProductList
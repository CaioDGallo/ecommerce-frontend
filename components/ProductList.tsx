import Product from "./Product"
import { Product as IProduct } from '../store/product/types'

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => <Product product={product} key={index}/>)}
    </div>
  )
}
export default ProductList
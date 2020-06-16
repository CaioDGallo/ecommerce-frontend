import RouterProps, { withRouter } from 'next/router'
import { Product as IProduct, ProductsTypes } from '../store/product/types';
import { useDispatch } from 'react-redux'

interface IProductProps {
  product: IProduct
  router: typeof RouterProps
}
const Product = (props: IProductProps) => {

  const dispatch = useDispatch();

  return (
    <div className="product">
      <h2 className="product__title">{props.product.title}</h2>
      <p className="product__description">{props.product.description}</p>
      <img src={"/" + props.product.imagePath + ".jpg"} alt="" className="product__image" />
      <div className="product__price-button-container">
        <div className="product__price">${props.product.price.toFixed(2)}</div>
        <button
          className="snipcart-add-item product__button"
          onClick={() => addProductToCart(dispatch, props.product)}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

function addProductToCart(dispatch, product: IProduct){
  console.log(product)
  dispatch({
    type: ProductsTypes.ADD_PRODUCT_TO_CART,
    data: product
  })
}

export default withRouter(Product)
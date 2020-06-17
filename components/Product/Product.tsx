import RouterProps, { withRouter } from 'next/router'
import { Product as IProduct, ProductsTypes, ProductsAction } from '../../store/product/types';
import { useDispatch } from 'react-redux'

import styles from './product.module.scss'

interface IProductProps {
  product: IProduct
  router: typeof RouterProps
}
const Product = (props: IProductProps) => {

  const dispatch = useDispatch();

  return (
    <div className={styles.product}>
      <h2 className={styles.product__title}>{props.product.title}</h2>
      <p className={styles.product__description}>{props.product.description}</p>
      <img src={"/" + props.product.imagePath + ".jpg"} alt="" className={styles.product__image} />
      <div className={styles.product__price_button_container}>
        <div className={styles.product__price}>R${props.product.price.toFixed(2)}</div>
        <button
          className={styles.product__button}
          onClick={() => addProductToCart(dispatch, props.product)}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

function addProductToCart(dispatch, product: IProduct){
  const addProductToCartAction: ProductsAction = {
    type: ProductsTypes.ADD_NEW_PRODUCT_TO_CART,
    cartProduct: {
      _id: product._id,
      title: product.title,
      price: product.price,
      amount: 1
    },
  }
  dispatch(addProductToCartAction)
}

export default withRouter(Product)
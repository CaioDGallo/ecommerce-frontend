import RouterProps, { withRouter } from 'next/router'
export interface IProduct {
  _id: string
  title: string
  price: number
  url: string  
  description: string
  imagePath: string
}
interface IProductProps {
  product: IProduct
  router: typeof RouterProps
}
const Product = (props: IProductProps) => {
  return (
    <div className="product">
      <h2 className="product__title">{props.product.title}</h2>
      <p className="product__description">{props.product.description}</p>
      <img src={"/" + props.product.imagePath + ".jpg"} alt="" className="product__image"/>
      <div className="product__price-button-container">
        <div className="product__price">${props.product.price.toFixed(2)}</div>
        <button 
          className="snipcart-add-item product__button"
          data-item-id={props.product._id}
          data-item-name={props.product.title}
          data-item-price={props.product.price}
          data-item-url={props.router.pathname}
          data-item-image={"/" + props.product.imagePath + ".jpg"}>
          Add to cart
        </button>
      </div>
    </div>
  )
}
export default withRouter(Product)
import Layout from '../components/Layout//Layout'
import ProductList from "../components/ProductList/ProductList"
import { Product as IProduct } from "../store/cart/types"
import Contact from "../components/Contact/Contact"
import api from '../services/api'

import styles from "../style/home_page.module.scss"
import { useEffect, useState } from "react"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  const [products, setProducts] = useState(props.products)

  useEffect(() => {
    setProducts(props.products)

    async function loadProductsFromAPI() {
      if (products.length == 0) {
        try {
          const apiResponse = await api.get('/products')
          setProducts(apiResponse.data as IProduct[])
        } catch (error) {
          console.error(error);
        }
      }
    }

    loadProductsFromAPI()
  })

  return (
    <Layout>
      <div className={styles.promotional__message}>
        <h3>PRODUTOS</h3>
        <h2>Artesanais</h2>
        <p>Uma <strong>coleção exclusiva de produtos</strong> artesanais e sustentáveis.</p>
      </div>
      <ProductList products={props.products} />
      <Contact />
    </Layout>
  )
}

Index.getInitialProps = async () => {
  let products: IProduct[] = [];
  try {
    const apiResponse = await api.get('/products')
    products = apiResponse.data as IProduct[]
  } catch (error) {
    console.error(error);
  }

  return {
    products
  }
}

export default Index
import Header from "../components/Header/Header"
import Layout from '../components/Layout//Layout'
import ProductList from "../components/ProductList/ProductList"
import { Product as IProduct } from "../store/product/types"
import Footer from "../components/Footer/Footer"
import Contact from "../components/Contact/Contact"
import Head from "next/head"
import api from '../services/api'
import { Provider } from 'react-redux'
import store from '../store'

import styles from "../style/home_page.module.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <Layout>
      <Provider store={store}>
        <div className={styles.app}>
          <Head>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
          </Head>
          <Header />
          <main className="main">
            <img src="/aquarium.svg" alt="a" className={styles.background__image} />
            <div className={styles.promotional__message}>
              <h3>PRODUTOS</h3>
              <h2>Artesanais</h2>
              <p>Uma <strong>coleção exclusiva de produtos</strong> artesanais e sustentáveis.</p>
            </div>
            <ProductList products={props.products} />
            <Contact />
          </main>
          <Footer />
        </div>
      </Provider>
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
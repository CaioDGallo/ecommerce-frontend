import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { Product as IProduct } from "../store/product/types"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"
import api from '../services/api'
import { Provider } from 'react-redux'
import store from '../store'

import "../style/global.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <Provider store={store}>
      <div className="app">
        <Head>
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Header />
        <main className="main">
          <img src="/aquarium.svg" alt="a" className="background-image" />
          <div className="promotional-message">
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
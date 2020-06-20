import { Provider } from 'react-redux'
import Header from "../Header/Header"
import Head from "next/head"
import Footer from "../Footer/Footer"
import store from '../../store'
import styles from './layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Provider store={store}>
                <div className={styles.app}>
                    <Head>
                        <link rel="shortcut icon" href="/favicon.ico" />
                    </Head>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </Provider>
        </div>
    )
}
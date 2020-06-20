import Link from "next/link";
import Cart from "../Cart/Cart";

import styles from './header.module.scss'
import NavAccountOptions from "../NavAccountOptions/NavAccountOptions";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/checkout">
          <img src="/logo.svg" alt="" className={styles.header__logo} />
        </Link>
        <Link href="/">
          <h1 className={styles.header__title}>Dessa Artesanatos</h1>
        </Link>
      </div>

      <Cart />
      <NavAccountOptions />
    </header>
  )
}
import Link from "next/link";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <img src="/logo.svg" alt="" className="header__logo" />
      </Link>
      <Link href="/">
        <h1 className="header__title">Dessa Artesanatos</h1>
      </Link>
      <Cart />
    </header>
  )
}
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.navbar}>
          <Link href="/">
            <Image
              width={400}
              height={100}
              src="/img/logo.svg"
              alt="imagen logo"
            />
          </Link>

          <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/about">About US</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Shop</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

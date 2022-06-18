import Head from "next/head";
import Header from "./header";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>Guitar Shop -{page}-</title>
        <link rel="icon" href="/guitar.png" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

import Head from "next/head";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>Guitar Shop -{page}-</title>
        <link rel="icon" href="/guitar.png" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;

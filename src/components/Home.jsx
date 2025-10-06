import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <>
     <Helmet>
        <title>Home - SIMPLE VEDAS</title>
        <meta property="og:title" content="Home - SIMPLE VEDAS" />
        <meta property="og:url" content="https://simplevedas.com/" />
        <meta name="twitter:title" content="Home - SIMPLE VEDAS" />
      </Helmet>
      
    </>
  );
}
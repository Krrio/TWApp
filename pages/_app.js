import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Tarninowe Wzgórze</title>
      <meta name="description" content="Odkryj Tarninowe Wzgórze - miejsce, gdzie magia spotyka się z naturą. Zapraszamy do eksploracji naszego unikalnego świata i doświadczenia niezapomnianych chwil ucieczki od codzienności." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <meta property="og:title" content="Tarninowe Wzgórze" />
      <meta property="og:description" content="Odkryj Tarninowe Wzgórze - miejsce, gdzie magia spotyka się z naturą. Zapraszamy do eksploracji naszego unikalnego świata i doświadczenia niezapomnianych chwil ucieczki od codzienności." />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;

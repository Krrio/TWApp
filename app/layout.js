import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <title>Tarninowe Wzgórze</title>
      <meta name="description" content="Odkryj Tarninowe Wzgórze - miejsce, gdzie magia spotyka się z naturą. Zapraszamy do eksploracji naszego unikalnego świata i doświadczenia niezapomnianych chwil ucieczki od codzienności." />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;

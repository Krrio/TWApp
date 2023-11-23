import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <style>
        {`
          body {
            /* Set your custom scrollbar styles */
            scrollbar-width: thin; /* "auto" or "thin" for Firefox */
            scrollbar-color: #000000 #ffffff; /* Change colors as needed */
            /* Other customizations like width, height, etc. */
          }
          /* You may need vendor prefixes for cross-browser compatibility */
          ::-webkit-scrollbar {
            width: 12px; /* Width of the scrollbar */
          }
          ::-webkit-scrollbar-thumb {
            background-color: #000000; /* Color of the scrollbar thumb */
            border-radius: 0px; /* Rounded corners of the thumb */
          }
          ::-webkit-scrollbar-track {
            background-color: #ffffff; /* Color of the scrollbar track */
          }
        `}
      </style>
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;

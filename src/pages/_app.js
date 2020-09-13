import React from 'react';

/*
  This is like index.js file.
  Put store, routes, global styles and error boundary such stuffs in here.
*/
function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App;

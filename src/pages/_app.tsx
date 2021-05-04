import "../styles/globals.scss";

import { Header } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Header/>
      </div>
      <Component {...pageProps} />
    </>
  ) 
  
}

export default MyApp

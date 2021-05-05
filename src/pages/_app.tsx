import "../styles/globals.scss";

import { Header, Nav } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div id="container">
        <Nav/>
        <Component {...pageProps} />
      </div>
    </>
  ) 
  
}

export default MyApp

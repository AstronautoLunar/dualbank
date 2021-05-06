import "../styles/globals.scss";

import { Header, Nav, SubHeader } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div id="container">
        <Nav/>
        <div id="mainHeader">
          <SubHeader/>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  ) 
  
}

export default MyApp

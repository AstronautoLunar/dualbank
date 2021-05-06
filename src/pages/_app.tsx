import "../styles/globals.scss";

import { Header, Nav, SubHeader } from '../components';

import { MainProvider } from '../Provider/mainProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainProvider>
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
      </MainProvider>
    </>
  ) 
  
}

export default MyApp

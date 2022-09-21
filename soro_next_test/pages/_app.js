import '../styles/globals.css'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

const DAESUNG = ({Component, pageProps}) => {
  return(
    <>
      <Header />
        <main>
          <Component {...pageProps}/>
        </main>
      <Footer />
    </>
  )
}

export default DAESUNG

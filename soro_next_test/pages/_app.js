import '../styles/globals.css'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { useState } from 'react'

const DAESUNG = ({Component, pageProps}) => {
  const [savedData, setSavedData] = useState(null);
  return(
    <>
      <Header />
        <main>
          <Component {...pageProps} savedData={savedData} setSavedData={setSavedData}/>
        </main>
      <Footer />
    </>
  )
}

export default DAESUNG

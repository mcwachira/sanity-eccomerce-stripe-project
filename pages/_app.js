import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import {StateProvider} from '../context/stateContext'
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return(
    <StateProvider>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
   
  )
}

export default MyApp

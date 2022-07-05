import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // wrap entire app with thirdweb provider to connect marketplace
    // then add network from third web which is rinkeby
  <ThirdwebProvider 
    desiredChainId={ChainId.Rinkeby}
    chainRpc={{
      [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/caf467aeae8447b5a222046bb6333957'
    }}  
  >
    <Component {...pageProps} />
  </ThirdwebProvider>   
  )
}

export default MyApp

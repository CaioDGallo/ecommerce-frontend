import { AppProps } from 'next/app'

import '../style/App.scss';
import { refreshAccessToken } from '../services/utils'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    refreshAccessToken()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
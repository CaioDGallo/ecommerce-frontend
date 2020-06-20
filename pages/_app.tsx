import { AppProps } from 'next/app'

import '../style/App.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
import { AppProps } from 'next/app'

import '../style/App.scss';
import AuthComponent from '../services/auth'
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  const parent = useRef(null)

  useEffect(() => {
    parent.current.startAuthComponent()
    parent.current.refreshAccessToken()
  }, [parent])

  return (
    <Provider store={store}>
      <AuthComponent parent={parent}/>
      <Component {...pageProps} />
    </Provider>
  );

}

export default MyApp
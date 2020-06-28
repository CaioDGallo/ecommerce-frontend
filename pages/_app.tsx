import { AppProps } from 'next/app'

import '../style/App.scss';
import AuthComponent from '../components/AuthComponent/AuthComponent'
import { useEffect, useRef, MutableRefObject } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  const authComponentRef = useRef(null)

  useEffect(() => {
    authComponentRef.current.startAuthComponent()
    authComponentRef.current.refreshAccessToken()
  }, [authComponentRef])

  return (
    <Provider store={store}>
      <AuthComponent parentReference={authComponentRef}/>
      <Component {...pageProps} />
    </Provider>
  );

}

export default MyApp
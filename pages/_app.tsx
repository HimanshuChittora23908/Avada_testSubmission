import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from "../redux-config/reduxStore"

function MyApp({ Component, pageProps }: AppProps) {
  const { store, persistor } = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>)
}

export default MyApp
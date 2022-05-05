import { QueryClientProvider } from 'react-query';
import { CartProvider } from '../contexts/CartContext';
import { queryClient } from '../services/api';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </QueryClientProvider>
  )
}

export default MyApp

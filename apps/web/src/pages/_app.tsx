import type { AppProps } from 'next/app';
import Layout from '@/components/navigation/Layout';
import '@/styles/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

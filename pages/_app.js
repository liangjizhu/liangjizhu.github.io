import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';
import { LanguageProvider } from '../lib/i18n';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

import { resolve } from 'path';

export default {
  base: '/silence-timer-landing/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        support: resolve(__dirname, 'support.html'),
        faq: resolve(__dirname, 'faq.html'),
        how: resolve(__dirname, 'how-to-use.html'),
      }
    }
  }
}

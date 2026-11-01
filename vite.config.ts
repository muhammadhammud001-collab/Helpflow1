import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          services: path.resolve(__dirname, 'services/index.html'),
          portfolio: path.resolve(__dirname, 'portfolio/index.html'),
          portfolioWelder: path.resolve(__dirname, 'portfolio/welder-bintaro/index.html'),
          portfolioDemo02: path.resolve(__dirname, 'portfolio/website-demo-02/index.html'),
          portfolioAhmad: path.resolve(__dirname, 'portfolio/ahmad-web-design/index.html'),
          portfolioBimbel: path.resolve(__dirname, 'portfolio/bimbel-doa-bunda/index.html'),
          about: path.resolve(__dirname, 'about/index.html'),
          pricing: path.resolve(__dirname, 'pricing/index.html'),
          insights: path.resolve(__dirname, 'insights/index.html'),
          articleKontraktor: path.resolve(__dirname, 'insights/website-company-profile-untuk-kontraktor/index.html'),
          articleInterior: path.resolve(__dirname, 'insights/manfaat-website-untuk-bisnis-interior/index.html'),
          articlePelangganGoogle: path.resolve(__dirname, 'insights/cara-bisnis-jasa-mendapatkan-pelanggan-dari-google/index.html'),
          articleStatisVsWordpress: path.resolve(__dirname, 'insights/website-statis-vs-wordpress/index.html'),
          articleLandingVsProfile: path.resolve(__dirname, 'insights/landing-page-vs-company-profile/index.html'),
          contact: path.resolve(__dirname, 'contact/index.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

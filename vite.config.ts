// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // 1. Importa o plugin PWA

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. Adiciona e configura o plugin VitePWA
    VitePWA({
      registerType: 'autoUpdate', // Atualizações automáticas com refresh
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'], // Inclui ícones básicos no precache
      manifest: {
        // Usa o manifest.json de public/, mas pode definir/sobrescrever aqui
        // Certifique-se que os nomes e caminhos dos ícones correspondem
        // aos arquivos que você tem na pasta public/
        name: 'Portfólio SPA', // Nome mais descritivo
        short_name: 'Portfólio', // Nome curto
        description: 'Meu Portfólio Pessoal SPA', // Descrição
        theme_color: '#121212', // Cor tema (ex: seu --corPrimaria)
        background_color: '#1E1E1E', // Cor de fundo (ex: seu --corSecundaria)
        display: 'standalone', // Essencial para "tela cheia"
        scope: '/arquetipo_portfolio/', // Define o escopo da navegação do PWA
        start_url: '/arquetipo_portfolio/', // URL inicial correta com a base
        icons: [
          {
            src: 'favicon.ico', // Certifique-se que existe em public/
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'logo192.png', // Certifique-se que existe em public/
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'logo512.png', // Certifique-se que existe em public/
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any maskable', // Importante para ícones adaptáveis
          },
        ],
      },
      workbox: {
        // Precacheia os arquivos essenciais do build
        globPatterns: ['**/*.{js,css,html,woff,woff2}'], // Foca nos essenciais
        // Ignora o manifesto se ele já está em public
        globIgnores: ['**/manifest*.json', '**/manifest*.webmanifest'],

        // Exemplo: Cache para fontes do Google (se usar)
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 ano
              },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i, // Necessário para os arquivos woff2
             handler: 'CacheFirst',
             options: {
               cacheName: 'google-fonts-webfonts-cache', // Cache diferente
               expiration: {
                 maxEntries: 10,
                 maxAgeSeconds: 60 * 60 * 24 * 365 // 1 ano
               },
               cacheableResponse: { statuses: [0, 200] }
             }
          },
          {
            // Cache para suas imagens (ajuste o padrão se necessário)
            // Assumindo que estão em /assets/ ou similar após o build
            urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 dias
              }
            }
          }
        ]
      },
       // Habilita SW no modo de desenvolvimento para facilitar testes
      devOptions: {
        enabled: true,
        type: 'module',
      }
    })
  ],
  base: "/arquetipo_portfolio/", // Mantém sua configuração de base
});
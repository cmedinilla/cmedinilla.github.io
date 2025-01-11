// eslint-disable-next-line no-undef
const URL_BASE = process.env.URL_BASE || '/';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: URL_BASE,
})

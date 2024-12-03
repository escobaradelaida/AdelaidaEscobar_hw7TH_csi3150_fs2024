import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //add in for github pages
  base: "/AdelaidaEscobar_hw7TH_csi3150_fs2024/",
});

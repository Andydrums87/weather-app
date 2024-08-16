import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"

// https://vitejs.dev/config/
export default ({mode, command}) => {
  dotenv.config()
  const env = loadEnv(mode, process.cwd(), '')
return  defineConfig({

  plugins: [react()],
  define: {
    __APP_ENV__: JSON.stringify(env.APP_ENV),
  },
  base: '/weather-app/',
  build: {
    outDir: 'dist',
 },
})
}


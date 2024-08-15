import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
return  defineConfig({
  plugins: [react()],
  define: {
    'process.env.VIT_WEATHER_API_KEY':JSON.stringify(process.env.VITE_WEATHER_API_KEY)
  },
  base: '/translate-app/',
  build: {
    outDir: 'dist',
 },
})
}


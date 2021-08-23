import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export const ASSETS_DIR = '_dev-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: `${process.cwd()}/dist/client`,
    assetsDir: ASSETS_DIR
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { '@ant-prefix': 'web-devtools' },
        javascriptEnabled: true
      }
    }
  },
  plugins: [reactRefresh()]
})
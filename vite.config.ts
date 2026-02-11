
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This allows you to use '@' as a shortcut for the 'src' directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  // If you are having issues with specific node_modules, 
  // you can explicitly include them in optimization
  optimizeDeps: {
    include: [], // Add problematic module names here if needed
  },
})

import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    exclude:[
      ...configDefaults.exclude, 
      '**/.{idea,git,cache,output,temp}/**', 
      'typeme/src/app'
    ]
  },
})
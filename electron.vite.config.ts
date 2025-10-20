import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin(), tsconfigPaths()],
	},
	preload: {
		plugins: [externalizeDepsPlugin(), tsconfigPaths()],
	},
	renderer: {
		resolve: {
			alias: {
				'@renderer': resolve('src/renderer/src'),
			},
		},
		plugins: [tsconfigPaths(), react(), tailwindcss()],
	},
})

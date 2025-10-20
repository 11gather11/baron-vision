import { join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
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
		plugins: [
			tsconfigPaths(),
			tanstackRouter({
				routesDirectory: join(__dirname, './src/renderer/src/routes'),
				generatedRouteTree: join(
					__dirname,
					'./src/renderer/src/routeTree.gen.ts'
				),
				target: 'react',
				autoCodeSplitting: true,
			}),
			react(),
			tailwindcss(),
		],
	},
})


import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sveltekit() as any],
	server: {
		port: 8080
	},
	build: {
		rollupOptions: {
			external: []
		}
	}
})

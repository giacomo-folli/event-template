
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { componentTagger } from "lovable-tagger";
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ mode }) => ({
	server: {
		host: "::",
		port: 8080,
	},
	plugins: [
		sveltekit(),
		mode === 'development' && componentTagger(),
	].filter(Boolean),
	resolve: {
		alias: {
			"@": fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
}));

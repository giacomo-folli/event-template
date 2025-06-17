
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { componentTagger } from "lovable-tagger";
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(() => ({
	server: {
		host: "::",
		port: 8080,
	},
	plugins: [sveltekit()]
}));

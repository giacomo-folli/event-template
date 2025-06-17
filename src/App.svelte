
<script lang="ts">
	import { onMount } from 'svelte';
	import './app.css';

	// This will be the main entry point for your Svelte app
	onMount(() => {
		console.log('Lovable Svelte app initialized');
	});
</script>

<main>
	<h1>Welcome to your Lovable Svelte App</h1>
	<p>Your app has been updated to the latest Lovable version!</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

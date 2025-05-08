<script lang="ts">
  import { fly } from 'svelte/transition';
  import '../app.css';
  import { onMount } from 'svelte';
  
  interface Props {
    children?: import('svelte').Snippet;
    error?: string;
  }

  let { children, error }: Props = $props();
  onMount(() => {
    if (error) setTimeout(() => error = '', 4000);
  });
</script>

{@render children?.()}

{#if error}
  <div transition:fly={{y: -30, duration: 300}} class="fixed top-0 left-0 right-0 z-50 w-full p-4 py-3 bg-red-500 text-white text-sm">
    <p>{error}</p>
</div>
{/if}
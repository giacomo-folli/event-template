
<script lang="ts">
  import CountdownTimer from '$lib/components/CountdownTimer.svelte';
  import EmailForm from '$lib/components/EmailForm.svelte';
  import SocialShare from '$lib/components/SocialShare.svelte';
  import { onMount } from 'svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const startDate = new Date(data?.event?.startDate || '');
  const endDate = new Date(data?.event?.endDate || '');

  const formattedDate = startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const startHour = startDate.toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const endHour = endDate.toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit'
  });

  let countdown = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = startDate.getTime() - now;

    countdown = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 / 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  $effect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });

  onMount(() => {
    if (data?.event){
      sessionStorage.setItem('event', JSON.stringify(data.event));
    }
  });
</script>

<div class="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
  <div class="max-w-2xl w-full mx-auto text-center space-y-8">
    <!-- Main heading -->
    <div class="space-y-4">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight animate-fade-in">
        {data?.event?.title || 'a worldwide leaderboard for developers.'}
      </h1>
      
      <p class="text-gray-400 text-lg animate-fade-in" style="animation-delay: 0.2s">
        {data?.event?.description || 'Discover your rank among AI-powered developers globally.'} 
        <span class="text-white font-medium ml-2">COMING SOON</span>
      </p>
    </div>

    <!-- Email form -->
    <div class="animate-fade-in" style="animation-delay: 0.4s">
      <EmailForm />
    </div>

    <!-- Countdown and waiting count -->
    <div class="space-y-6 animate-fade-in" style="animation-delay: 0.6s">
      <div class="text-gray-500 text-sm">
        <CountdownTimer {countdown} />
      </div>
      
      <div class="text-gray-500 text-sm flex items-center justify-center gap-2">
        <span>154 developers waiting</span>
        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>
    </div>

    <!-- Platform logos -->
    <div class="pt-8 animate-fade-in" style="animation-delay: 0.8s">
      <p class="text-gray-500 text-sm mb-6">Track your AI usage across platforms</p>
      <div class="flex items-center justify-center gap-8 opacity-60">
        <span class="text-gray-400 text-sm">DeepSeek</span>
        <span class="text-gray-400 text-sm">Google AI</span>
        <span class="text-red-400 text-sm">Mistral</span>
        <span class="text-gray-400 text-sm">Cohere</span>
        <span class="text-teal-400 text-sm">Perplexity</span>
      </div>
    </div>

    <!-- Bottom section -->
    <div class="pt-8 space-y-4 animate-fade-in" style="animation-delay: 1s">
      <div class="flex items-center justify-center gap-6">
        <button class="bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-2 rounded text-sm font-medium transition-colors">
          ⭐ Founding Member - 50 left
        </button>
        <button class="border border-gray-600 hover:border-gray-500 text-gray-300 px-4 py-2 rounded text-sm transition-colors">
          📈 Interested in Investing?
        </button>
      </div>
      
      <p class="text-gray-600 text-xs">backed by no one.</p>
      
      <SocialShare />
    </div>
  </div>
</div>

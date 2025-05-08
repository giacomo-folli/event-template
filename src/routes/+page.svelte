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
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  $effect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });

  onMount(() => {    
    const backgroundImage = document.getElementById('cover-image')
    if (!backgroundImage) return;

    backgroundImage.style.backgroundImage = `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`;
  });
</script>

<div id="cover-image" class="min-h-screen w-full bg-cover bg-center relative overflow-hidden">
  <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full mx-auto bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl rounded-lg">
      <div class="p-6 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight animate-fade-in">
          {data?.event?.title || 'Error'}
        </h1>
        
        <p class="text-white/70 text-xs sm:text-sm mb-2 text-left animate-fade-in" style="animation-delay: 0.2s">
          {formattedDate} - {startHour} - {endHour}
        </p>
        
        <p class="text-white/70 mb-6 text-sm text-left animate-fade-in" style="animation-delay: 0.3s">
          {data?.event?.description || 'Error'}
        </p>
        
        <EmailForm />

        <p class="text-white/70 my-4 text-sm text-center animate-fade-in" style="animation-delay: 0.3s">
          Are you ready?
        </p>
       
        <div class="w-full flex items-center justify-between gap-4">
          <div class="w-full">
            <CountdownTimer {countdown} />
          </div>
          
          <div class="w-full">
            <SocialShare />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
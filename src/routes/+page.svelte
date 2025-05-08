<script lang="ts">
  import { onMount } from 'svelte';
  import CountdownTimer from '$lib/components/CountdownTimer.svelte';
  import EmailForm from '$lib/components/EmailForm.svelte';
  import SocialShare from '$lib/components/SocialShare.svelte';

  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  const formattedDate = launchDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const startHour = '10 AM';
  const endHour = '2 PM';

  let countdown = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    countdown = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="min-h-screen w-full bg-unsplash-bg bg-cover bg-center relative overflow-hidden">
  <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full mx-auto bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl rounded-lg">
      <div class="p-6 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight animate-fade-in">
          MARKETING INC.
        </h1>
        
        <p class="text-white/70 text-xs sm:text-sm mb-2 text-left animate-fade-in" style="animation-delay: 0.2s">
          {formattedDate} - {startHour} - {endHour}
        </p>
        
        <p class="text-white/70 mb-6 text-sm text-left animate-fade-in" style="animation-delay: 0.3s">
          We're working hard to bring you an amazing marketing platform that will help your business grow. 
          Sign up to be notified when we launch!
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
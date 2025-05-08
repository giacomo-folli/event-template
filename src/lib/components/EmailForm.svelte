<script lang="ts">
  import { subscribeParticipant } from "./utils";

  let email = $state('');
  let isSubmitting = $state(false);

  async function handleSubmit(event: Event) {
    event.preventDefault();
    if (!email || !email.includes('@')) {
      console.log('Please enter a valid email address.');
      return;
    }

    isSubmitting = true;
    const eventData = sessionStorage.getItem('event');
    if (!eventData) {
      console.log('Event not found');
      return;
    }
    
    const sessionEvent = JSON.parse(eventData);
    await subscribeParticipant(email, sessionEvent);
    
    alert('Thank you! We\'ll notify you when we launch.');
    email = '';
    isSubmitting = false;
  }
</script>

<form onsubmit={handleSubmit} class="flex flex-col gap-3 w-full animate-fade-in" style="animation-delay: 0.4s">
  <input
    type="email"
    placeholder="Enter your email here *"
    bind:value={email}
    class="h-10 w-full rounded-md border bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 border-white/30 focus:border-white text-sm px-3 py-2"
    required
  />
  <button 
    type="submit" 
    disabled={isSubmitting}
    class="bg-[#28365a] hover:bg-[#28365a]/90 text-white font-medium text-sm h-10 rounded-md"
  >
    Notify Me!
  </button>
</form>
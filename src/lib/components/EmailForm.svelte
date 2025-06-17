
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

<form onsubmit={handleSubmit} class="flex items-center gap-0 max-w-md mx-auto">
  <input
    type="email"
    placeholder="hello@email.com"
    bind:value={email}
    class="flex-1 h-12 bg-gray-900 border border-gray-700 border-r-0 rounded-l-md text-white placeholder:text-gray-500 px-4 focus:outline-none focus:border-gray-600"
    required
  />
  <button 
    type="submit" 
    disabled={isSubmitting}
    class="h-12 bg-white hover:bg-gray-100 text-black font-medium px-6 rounded-r-md transition-colors"
  >
    Join
  </button>
</form>

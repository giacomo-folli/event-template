<script lang="ts">
  import { Facebook, Twitter, Linkedin } from 'lucide-svelte';

  type Platform = 'twitter' | 'facebook' | 'linkedin';

  function shareOnSocial(platform: Platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this upcoming marketing platform!');
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
</script>

<div class="flex justify-center gap-4 animate-fade-in" style="animation-delay: 0.5s">
  <button
    on:click={() => shareOnSocial('twitter')}
    class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
    aria-label="Share on Twitter"
  >
    <Twitter class="w-5 h-5 text-white" />
  </button>
  <button
    on:click={() => shareOnSocial('facebook')}
    class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
    aria-label="Share on Facebook"
  >
    <Facebook class="w-5 h-5 text-white" />
  </button>
  <button
    on:click={() => shareOnSocial('linkedin')}
    class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
    aria-label="Share on LinkedIn"
  >
    <Linkedin class="w-5 h-5 text-white" />
  </button>
</div>

<script lang="ts">
  type Countdown = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  
  interface Props {
    countdown: Countdown;
  }

  let { countdown }: Props = $props();
</script>

<div class="text-gray-500 text-sm">
  {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s remaining
</div>

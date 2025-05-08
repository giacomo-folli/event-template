<script lang="ts">
  type Countdown = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  
  export let countdown: Countdown;
</script>

<div class="grid grid-cols-4 gap-2 text-white/70 text-sm">
  <div class="text-center">
    <span class="font-semibold">{countdown.days}</span>
    <span class="text-xs">d</span>
  </div>
  <div class="text-center">
    <span class="font-semibold">{countdown.hours}</span>
    <span class="text-xs">h</span>
  </div>
  <div class="text-center">
    <span class="font-semibold">{countdown.minutes}</span>
    <span class="text-xs">m</span>
  </div>
  <div class="text-center">
    <span class="font-semibold">{countdown.seconds}</span>
    <span class="text-xs">s</span>
  </div>
</div>
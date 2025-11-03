<template>
  <div class="space-y-1 font-mono text-sm md:text-base">
    <pre
      v-for="(line, index) in outputs"
      :key="index"
      :class="['whitespace-pre-wrap break-words', getLineClass(line.type)]"
    >{{ line.content }}</pre>
  </div>
</template>

<script setup lang="ts">
import type { OutputLine } from './Terminal.vue'

defineProps<{
  outputs: OutputLine[]
}>()

const getLineClass = (type: OutputLine['type']) => {
  switch (type) {
    case 'command':
      return 'text-terminal-green-bright terminal-glow font-bold'
    case 'error':
      return 'text-red-500'
    case 'success':
      return 'text-terminal-green terminal-glow'
    case 'warning':
      return 'text-yellow-500'
    default:
      return 'text-[hsl(var(--foreground))]'
  }
}
</script>

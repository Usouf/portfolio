<template>
  <div class="relative">
    <div class="flex items-center gap-2 font-mono text-sm md:text-base">
      <span class="text-terminal-green-bright terminal-glow font-bold">$</span>
      <div class="relative flex-1">
        <input
          ref="inputElement"
          type="text"
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          @keydown="handleKeyDown"
          @keyup="$emit('keyUp', $event)"
          class="w-full bg-transparent border-none outline-none text-[hsl(var(--foreground))] caret-terminal-green"
          autocomplete="off"
          spellcheck="false"
        />
      </div>
    </div>

    <div v-if="suggestions.length > 0 && modelValue" class="mt-2 space-y-1 text-[hsl(var(--terminal-green-dim))] text-xs md:text-sm pl-4">
      <div class="text-terminal-green-dim">Suggestions:</div>
      <div v-for="(suggestion, index) in suggestions" :key="index" class="pl-2">
        → {{ suggestion.command }}
        <span v-if="suggestion.description" class="ml-2 text-[hsl(var(--terminal-green-dim))]">
          - {{ suggestion.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'submit': [value: string]
  'keyUp': [event: KeyboardEvent]
  'keyDown': [event: KeyboardEvent]
}>()

const inputElement = ref<HTMLInputElement | null>(null)

const commandsList = [
  { command: 'help', description: 'Show all commands' },
  { command: 'whoami', description: 'Who is Usoof?' },
  { command: 'about', description: 'Professional summary' },
  { command: 'skills', description: 'Technical skills' },
  { command: 'experience', description: 'Work history' },
  { command: 'projects', description: 'Notable projects' },
  { command: 'education', description: 'Education & certs' },
  { command: 'contact', description: 'Get in touch' },
  { command: 'ls', description: 'List directory' },
  { command: 'pwd', description: 'Current directory' },
  { command: 'cd', description: 'Change directory' },
  { command: 'cat', description: 'Display file' },
  { command: 'clear', description: 'Clear terminal' },
]

const suggestions = computed(() => {
  if (!props.modelValue) return []
  const input = props.modelValue.toLowerCase()
  return commandsList.filter(cmd => cmd.command.startsWith(input)).slice(0, 5)
})

const handleKeyDown = (e: KeyboardEvent) => {
  emit('keyDown', e)
  if (e.key === 'Enter') {
    e.preventDefault()
    emit('submit', props.modelValue)
  }
}

const focus = () => {
  inputElement.value?.focus()
}

onMounted(() => {
  focus()
})

defineExpose({ focus })
</script>

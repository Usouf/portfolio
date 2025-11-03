<template>
  <div class="min-h-screen h-screen flex w-full overflow-hidden">
    <AppSidebar
      :is-open="sidebarOpen"
      @toggle="sidebarOpen = !sidebarOpen"
      @command-select="handleCommand"
    />

    <div class="flex-1 flex flex-col min-w-0">
      <header class="h-12 flex-shrink-0 flex items-center border-b border-[hsl(var(--terminal-green-dim)_/_0.3)] bg-[hsl(var(--background))] px-4">
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="text-terminal-green-bright hover:text-terminal-green transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <span class="ml-4 font-mono text-sm text-[hsl(var(--terminal-green-dim))]">
          Terminal Portfolio - Usoof Mansoor
        </span>
      </header>

      <div
        class="flex-1 bg-[hsl(var(--background))] p-4 md:p-8 scanline terminal-flicker overflow-y-auto overflow-x-hidden"
        @click="focusInput"
      >
        <div class="max-w-5xl mx-auto">
          <div class="space-y-2">
            <TerminalOutput :outputs="outputs" />
            <CommandInput
              ref="inputRef"
              v-model="currentInput"
              @submit="handleCommand"
              @key-up="handleKeyUp"
              @key-down="handleKeyDown"
            />
            <div ref="terminalEndRef" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import TerminalOutput from './TerminalOutput.vue'
import CommandInput from './CommandInput.vue'
import AppSidebar from './AppSidebar.vue'
import { processCommand } from '../lib/commands'
import { CommandHistory } from '../lib/commandHistory'

const ASCII_BANNER = ` ██╗   ██╗███████╗ ██████╗  ██████╗ ███████╗    ███╗   ███╗
 ██║   ██║██╔════╝██╔═══██╗██╔═══██╗██╔════╝    ████╗ ████║
 ██║   ██║███████╗██║   ██║██║   ██║█████╗      ██╔████╔██║
 ██║   ██║╚════██║██║   ██║██║   ██║██╔══╝      ██║╚██╔╝██║
 ╚██████╔╝███████║╚██████╔╝╚██████╔╝██║         ██║ ╚═╝ ██║
  ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝         ╚═╝     ╚═╝

  Full Stack Engineer | Tech Lead | Automation Specialist
  ─────────────────────────────────────────────────────────
  Type 'help' to see available commands
  Type 'about' to learn more about me
`

export interface OutputLine {
  type: 'command' | 'output' | 'error' | 'success' | 'warning'
  content: string
  timestamp?: Date
}

const outputs = ref<OutputLine[]>([
  { type: 'output', content: ASCII_BANNER }
])
const currentInput = ref('')
const commandHistory = new CommandHistory()
const terminalEndRef = ref<HTMLElement | null>(null)
const inputRef = ref<InstanceType<typeof CommandInput> | null>(null)
const sidebarOpen = ref(true)

const scrollToBottom = () => {
  nextTick(() => {
    terminalEndRef.value?.scrollIntoView({ behavior: 'smooth' })
  })
}

watch(() => outputs.value.length, scrollToBottom)
watch(() => currentInput.value, scrollToBottom)

onMounted(() => {
  focusInput()
})

const focusInput = () => {
  inputRef.value?.focus()
}

const handleCommand = async (command: string) => {
  const cmd = typeof command === 'string' ? command : currentInput.value

  if (!cmd.trim()) return

  commandHistory.add(cmd)

  outputs.value.push({
    type: 'command',
    content: `$ ${cmd}`,
    timestamp: new Date()
  })

  const result = await processCommand(cmd.trim())

  if (result.output === '::CLEAR::') {
    outputs.value = [{ type: 'output', content: ASCII_BANNER }]
  } else {
    outputs.value.push({
      type: result.type,
      content: result.output,
      timestamp: new Date()
    })
  }

  currentInput.value = ''
}

const handleKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    const previous = commandHistory.previous()
    if (previous !== null) {
      currentInput.value = previous
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    const next = commandHistory.next()
    if (next !== null) {
      currentInput.value = next
    } else {
      currentInput.value = ''
    }
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'l' && e.ctrlKey) {
    e.preventDefault()
    outputs.value = [{ type: 'output', content: ASCII_BANNER }]
  } else if (e.key === 'c' && e.ctrlKey) {
    e.preventDefault()
    currentInput.value = ''
  }
}
</script>

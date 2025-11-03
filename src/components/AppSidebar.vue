<template>
  <aside
    :class="[
      'h-screen flex-shrink-0 border-r border-[hsl(var(--terminal-green-dim)_/_0.3)] bg-[hsl(var(--background))] transition-all duration-300',
      isOpen ? 'w-64' : 'w-0 overflow-hidden'
    ]"
  >
    <div class="h-full flex flex-col overflow-hidden">
      <div class="flex-shrink-0 p-4 border-b border-[hsl(var(--terminal-green-dim)_/_0.3)]">
        <div class="flex items-center gap-2 text-terminal-green-bright">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          <span class="font-mono font-bold">Commands</span>
        </div>
        <p class="text-xs text-[hsl(var(--terminal-green-dim))] mt-1 font-mono">
          Click to execute
        </p>
      </div>

      <div class="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6">
        <!-- Basic Commands -->
        <div>
          <h3 class="font-mono text-terminal-green-dim text-xs font-bold mb-2">
            Basic Commands
          </h3>
          <div class="space-y-1">
            <button
              v-for="item in basicCommands"
              :key="item.command"
              @click="$emit('commandSelect', item.command)"
              class="w-full flex items-center gap-2 px-2 py-1.5 font-mono text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--terminal-green-dim)_/_0.2)] transition-colors rounded text-left"
            >
              <component :is="item.icon" class="w-4 h-4" />
              <span>{{ item.command }}</span>
            </button>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="font-mono text-terminal-green-dim text-xs font-bold mb-2">
            Navigation
          </h3>
          <div class="space-y-1">
            <button
              v-for="item in navigationCommands"
              :key="item.command"
              @click="$emit('commandSelect', item.command)"
              class="w-full px-2 py-1.5 font-mono text-xs text-terminal-blue hover:bg-[hsl(var(--terminal-green-dim)_/_0.2)] transition-colors rounded text-left"
            >
              {{ item.command }}
            </button>
          </div>
        </div>

        <!-- Utilities -->
        <div>
          <h3 class="font-mono text-terminal-green-dim text-xs font-bold mb-2">
            Utilities
          </h3>
          <div class="space-y-1">
            <button
              v-for="item in utilityCommands"
              :key="item.command"
              @click="$emit('commandSelect', item.command)"
              class="w-full px-2 py-1.5 font-mono text-xs text-[hsl(var(--foreground))] hover:bg-[hsl(var(--terminal-green-dim)_/_0.2)] transition-colors rounded text-left"
            >
              {{ item.command }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { h } from 'vue'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  toggle: []
  commandSelect: [command: string]
}>()

// Icon components
const HelpCircle = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('circle', { cx: 12, cy: 12, r: 10 }),
  h('path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' }),
  h('line', { x1: 12, y1: 17, x2: 12.01, y2: 17 })
])

const User = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: 12, cy: 7, r: 4 })
])

const FileText = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
  h('polyline', { points: '14 2 14 8 20 8' }),
  h('line', { x1: 16, y1: 13, x2: 8, y2: 13 }),
  h('line', { x1: 16, y1: 17, x2: 8, y2: 17 }),
  h('polyline', { points: '10 9 9 9 8 9' })
])

const Code = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('polyline', { points: '16 18 22 12 16 6' }),
  h('polyline', { points: '8 6 2 12 8 18' })
])

const Briefcase = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('rect', { x: 2, y: 7, width: 20, height: 14, rx: 2, ry: 2 }),
  h('path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
])

const FolderTree = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' })
])

const GraduationCap = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M22 10v6M2 10l10-5 10 5-10 5z' }),
  h('path', { d: 'M6 12v5c3 3 9 3 12 0v-5' })
])

const Mail = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
  h('polyline', { points: '22,6 12,13 2,6' })
])

const basicCommands = [
  { command: 'help', icon: HelpCircle, description: 'Show all commands' },
  { command: 'whoami', icon: User, description: 'Who is Usoof?' },
  { command: 'about', icon: FileText, description: 'Professional summary' },
  { command: 'skills', icon: Code, description: 'Technical skills' },
  { command: 'experience', icon: Briefcase, description: 'Work history' },
  { command: 'projects', icon: FolderTree, description: 'Notable projects' },
  { command: 'education', icon: GraduationCap, description: 'Education & certs' },
  { command: 'contact', icon: Mail, description: 'Get in touch' },
]

const navigationCommands = [
  { command: 'ls', description: 'List directory contents' },
  { command: 'pwd', description: 'Current directory' },
  { command: 'cd skills', description: 'Navigate to skills' },
  { command: 'cd projects', description: 'Navigate to projects' },
  { command: 'cd ~', description: 'Go to home' },
]

const utilityCommands = [
  { command: 'clear', description: 'Clear terminal' },
  { command: 'history', description: 'Command history' },
]
</script>

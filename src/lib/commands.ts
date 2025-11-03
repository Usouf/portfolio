import { portfolioData } from './portfolioData'
import { FileSystemNavigator } from './fileSystem'

const fsNavigator = new FileSystemNavigator()

export interface CommandResult {
  type: 'output' | 'error' | 'success' | 'warning'
  output: string
}

const commands: Record<string, () => Promise<CommandResult> | CommandResult> = {
  help: () => ({
    type: 'output',
    output: `Available Commands:
─────────────────────────────────────────────────────────

  whoami              Quick introduction
  about               Full professional summary
  skills              List technical skills
  experience          Show work history
  projects            Display project portfolio
  education           Educational background
  contact             Get in touch
  resume              Download resume

Navigation:
  ls                  List directory contents
  pwd                 Print working directory
  cd [dir]            Change directory (cd skills, cd .., cd ~)
  cat [file]          Display file content

Utilities:
  clear               Clear terminal
  history             Show command history

Easter Eggs:
  sudo make-coffee    Try it! ☕
  matrix              Enter the Matrix
  hack                Hack the planet!

Keyboard Shortcuts:
  Ctrl+L              Clear screen
  Ctrl+C              Cancel current input
  ↑/↓                 Navigate command history

─────────────────────────────────────────────────────────
💡 Tip: Navigate to skills, projects, or experience directories!`,
  }),

  whoami: () => ({
    type: 'output',
    output: portfolioData.whoami,
  }),

  about: () => ({
    type: 'output',
    output: portfolioData.about,
  }),

  skills: () => ({
    type: 'output',
    output: portfolioData.skills,
  }),

  experience: () => ({
    type: 'output',
    output: portfolioData.experience,
  }),

  projects: () => ({
    type: 'output',
    output: portfolioData.projects,
  }),

  education: () => ({
    type: 'output',
    output: portfolioData.education,
  }),

  contact: () => ({
    type: 'success',
    output: portfolioData.contact,
  }),

  resume: () => ({
    type: 'success',
    output: `Resume Download:
────────────────────────────────────────────

Opening resume in new tab...

📄 Full Stack Engineer Resume
📄 RPA Specialist Resume

💡 Tip: Right-click and "Save As" to download`,
  }),

  ls: () => {
    const listing = fsNavigator.listDirectory()
    return {
      type: 'output',
      output: listing
    }
  },

  pwd: () => ({
    type: 'output',
    output: fsNavigator.getCurrentPath()
  }),

  cat: () => ({
    type: 'warning',
    output: `Usage: cat [section]

Available sections:
  about, skills, experience, projects, education, contact

Example: cat about`,
  }),

  clear: () => ({
    type: 'output',
    output: '',
  }),

  // Easter eggs
  'sudo make-coffee': () => ({
    type: 'error',
    output: `☕ Error: Coffee machine not found in /dev/kitchen
Permission denied: You are not in the sudoers file.
This incident will be reported to the caffeine police.`,
  }),

  matrix: () => ({
    type: 'success',
    output: `Wake up, Neo...
The Matrix has you...
Follow the white rabbit 🐰

Knock, knock, Neo.

01010111 01100001 01101011 01100101 00100000 01110101 01110000`,
  }),

  hack: () => ({
    type: 'success',
    output: `[▓▓▓▓▓▓▓▓▓▓] 100%

HACK THE PLANET! 🌍

Access Granted: Gibson Mainframe
Uploading virus.exe...
Bypassing firewall...
Root access obtained!

Just kidding. I'm a full-stack engineer, not a hacker 😄`,
  }),

  sudo: () => ({
    type: 'error',
    output: `sudo: command not found. Did you mean 'sudo make-coffee'?`,
  }),
}

const handleCatCommand = (args: string[]): CommandResult => {
  const filename = args[0]

  if (!filename) {
    return {
      type: 'warning',
      output: `Usage: cat [file]\nTry 'ls' to see available files`
    }
  }

  const fsResult = fsNavigator.readFile(filename)
  if (fsResult.success) {
    return { type: 'output', output: fsResult.content }
  }

  const content = portfolioData[filename as keyof typeof portfolioData]
  if (content) {
    return { type: 'output', output: content }
  }

  return {
    type: 'error',
    output: fsResult.content
  }
}

const handleCdCommand = (args: string[]): CommandResult => {
  const path = args.join(' ') || '~'
  const result = fsNavigator.changeDirectory(path)

  return {
    type: result.success ? 'success' : 'error',
    output: result.message
  }
}

export const processCommand = async (input: string): Promise<CommandResult> => {
  const trimmedInput = input.trim()
  const [command, ...args] = trimmedInput.split(' ')
  const lowerCommand = command.toLowerCase()

  if (lowerCommand === 'clear') {
    return { type: 'output', output: '::CLEAR::' }
  }

  if (lowerCommand === 'cd') {
    return handleCdCommand(args)
  }

  if (lowerCommand === 'cat') {
    return handleCatCommand(args)
  }

  if (lowerCommand === 'history') {
    return {
      type: 'output',
      output: 'Command history is tracked! Use ↑/↓ arrows to navigate.'
    }
  }

  if (commands[lowerCommand]) {
    const result = commands[lowerCommand]()
    return result instanceof Promise ? await result : result
  }

  return {
    type: 'error',
    output: `Command not found: ${command}
Type 'help' for available commands`,
  }
}

export const getAllCommands = (): string[] => {
  return Object.keys(commands)
}

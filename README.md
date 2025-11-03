# Portfolio Vue - Terminal-Based Portfolio

A fully-featured terminal-based portfolio application built with Vue.js 3, TypeScript, and Vite. This is a complete recreation of the React/TypeScript version using Vue.js.

## Features

- 🖥️ **Terminal Interface**: Interactive command-line portfolio experience
- 📁 **File System Navigation**: Navigate through skills, projects, and experience like a real terminal
- 🎨 **Retro Terminal Theme**: Classic phosphor green CRT monitor aesthetic with scanlines and glow effects
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⌨️ **Keyboard Shortcuts**: Full keyboard navigation support
- 📋 **Command History**: Navigate through previous commands with arrow keys
- 🔍 **Auto-suggestions**: Real-time command suggestions as you type
- 🎯 **Sidebar Navigation**: Quick access to common commands
- 🎁 **Easter Eggs**: Hidden surprises for curious visitors

## Commands

### Information Commands
- `whoami` - Quick introduction
- `about` - Full professional summary
- `skills` - List technical skills
- `experience` - Show work history
- `projects` - Display project portfolio
- `education` - Educational background
- `contact` - Get in touch
- `resume` - Download resume

### Navigation Commands
- `ls` - List directory contents
- `pwd` - Print working directory
- `cd [dir]` - Change directory (e.g., `cd skills`, `cd ..`, `cd ~`)
- `cat [file]` - Display file content

### Utility Commands
- `clear` - Clear terminal screen
- `history` - Show command history
- `help` - Display all available commands

### Keyboard Shortcuts
- `Ctrl+L` - Clear screen
- `Ctrl+C` - Cancel current input
- `↑/↓` - Navigate command history
- `Tab` - Auto-complete (coming soon)

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **Vue Router** - Official router for Vue.js

## Project Structure

```
portfolio-vue/
├── src/
│   ├── components/
│   │   ├── Terminal.vue          # Main terminal component
│   │   ├── TerminalOutput.vue    # Output rendering
│   │   ├── CommandInput.vue      # Input with suggestions
│   │   └── AppSidebar.vue        # Sidebar with quick commands
│   ├── lib/
│   │   ├── commands.ts           # Command processing logic
│   │   ├── commandHistory.ts     # Command history management
│   │   ├── fileSystem.ts         # Virtual file system
│   │   └── portfolioData.ts      # Portfolio content
│   ├── pages/
│   │   ├── Index.vue             # Home page
│   │   └── NotFound.vue          # 404 page
│   ├── App.vue                   # Root component
│   ├── main.ts                   # Application entry point
│   └── style.css                 # Global styles
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-vue
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Customization

### Updating Portfolio Content

Edit the portfolio data in `src/lib/portfolioData.ts`:

```typescript
export const portfolioData = {
  whoami: `Your introduction...`,
  about: `Your professional summary...`,
  // ... more sections
}
```

### Adding New Commands

Add new commands in `src/lib/commands.ts`:

```typescript
const commands: Record<string, () => CommandResult> = {
  yourcommand: () => ({
    type: 'output',
    output: 'Your command output'
  }),
  // ... more commands
}
```

### Modifying File System

Update the virtual file system in `src/lib/fileSystem.ts`:

```typescript
export const fileSystem: Record<string, FileNode> = {
  home: {
    name: 'home',
    type: 'directory',
    children: {
      // Add your directories and files here
    }
  }
}
```

### Changing Theme Colors

Modify colors in `tailwind.config.js` and `src/style.css`:

```css
:root {
  --terminal-green: 120 100% 50%;
  --terminal-green-bright: 120 100% 65%;
  /* ... more colors */
}
```

## Features Comparison

| Feature | Original React Version | Vue.js Version |
|---------|----------------------|----------------|
| Terminal Interface | ✅ | ✅ |
| File System Navigation | ✅ | ✅ |
| Command History | ✅ | ✅ |
| Auto-suggestions | ✅ | ✅ |
| Sidebar | ✅ | ✅ |
| Keyboard Shortcuts | ✅ | ✅ |
| Responsive Design | ✅ | ✅ |
| Terminal Effects | ✅ | ✅ |
| TypeScript Support | ✅ | ✅ |
| Easter Eggs | ✅ | ✅ |

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Built with ❤️ using Vue.js 3

Original React/TypeScript version by Usoof Mansoor
Vue.js recreation by Usoof Mansoor

## Contact

- 📧 Email: yousuf.m.n@gmail.com
- 💼 LinkedIn: [linkedin.com/in/usoof-mansoor](https://linkedin.com/in/usoof-mansoor)
- 🐙 GitHub: [github.com/usoof-mansoor](https://github.com/usoof-mansoor)

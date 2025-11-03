# Setup Instructions for Portfolio Vue

## Quick Start

Follow these steps to get the Vue.js portfolio up and running:

### 1. Navigate to the project directory

```bash
cd c:\Users\umansoor\Developer\portfolio\portfolio-vue
```

### 2. Install dependencies

```bash
npm install
```

This will install all required dependencies including:
- Vue.js 3
- TypeScript
- Vite
- TailwindCSS
- Vue Router
- Lucide Vue Next (for icons)

### 3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for production (optional)

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 5. Preview the production build (optional)

```bash
npm run preview
```

## Testing the Application

Once the dev server is running, test these features:

### Basic Commands
1. Type `help` - Should show all available commands
2. Type `whoami` - Should show your introduction
3. Type `about` - Should show professional summary
4. Type `skills` - Should show technical skills
5. Type `experience` - Should show work history
6. Type `projects` - Should show projects
7. Type `education` - Should show education
8. Type `contact` - Should show contact info

### File System Navigation
1. Type `ls` - Should list current directory contents
2. Type `pwd` - Should show current path
3. Type `cd skills` - Should navigate to skills directory
4. Type `ls` - Should show files in skills directory
5. Type `cat backend` - Should display backend file contents
6. Type `cd ..` - Should go back to parent directory
7. Type `cd ~` - Should return to home directory

### Command History
1. Type several commands
2. Press `↑` arrow - Should show previous command
3. Press `↓` arrow - Should show next command

### Keyboard Shortcuts
1. Press `Ctrl+L` - Should clear the terminal
2. Type something, press `Ctrl+C` - Should clear current input

### Sidebar Navigation
1. Click the hamburger menu (top left) - Should toggle sidebar
2. Click any command in sidebar - Should execute that command

### Auto-suggestions
1. Start typing a command (e.g., "ski")
2. Should see suggestions below the input

### Easter Eggs
1. Type `sudo make-coffee` - Should show funny error
2. Type `matrix` - Should show Matrix-themed message
3. Type `hack` - Should show hacking joke

## Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically try the next available port (5174, 5175, etc.)

### Dependencies not installing
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### TypeScript errors
Make sure you're using Node.js 18 or higher:
```bash
node --version
```

### Build fails
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building again: `npm run build`

## Project Structure Overview

```
portfolio-vue/
├── src/
│   ├── components/          # Vue components
│   │   ├── Terminal.vue     # Main terminal component
│   │   ├── TerminalOutput.vue
│   │   ├── CommandInput.vue
│   │   └── AppSidebar.vue
│   ├── lib/                 # Business logic
│   │   ├── commands.ts      # Command processing
│   │   ├── commandHistory.ts
│   │   ├── fileSystem.ts    # Virtual file system
│   │   └── portfolioData.ts # Your portfolio content
│   ├── pages/               # Route pages
│   │   ├── Index.vue
│   │   └── NotFound.vue
│   ├── App.vue              # Root component
│   ├── main.ts              # Entry point
│   └── style.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
└── tailwind.config.js       # TailwindCSS config
```

## Customization

### Update Your Information
Edit `src/lib/portfolioData.ts` to update:
- Personal information
- Work experience
- Skills
- Projects
- Education
- Contact details

### Add New Commands
Edit `src/lib/commands.ts` to add new commands

### Modify File System
Edit `src/lib/fileSystem.ts` to change the virtual file structure

### Change Theme
Edit `src/style.css` and `tailwind.config.js` to modify colors and styling

## Deployment

### Deploy to Netlify
1. Run `npm run build`
2. Upload the `dist/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run `npm run deploy`

## Support

If you encounter any issues:
1. Check the console for errors (F12 in browser)
2. Verify all dependencies are installed
3. Make sure you're using Node.js 18+
4. Try deleting `node_modules` and reinstalling

## Next Steps

After setting up:
1. ✅ Test all commands
2. ✅ Customize portfolio data
3. ✅ Modify theme/colors if desired
4. ✅ Add your own commands/features
5. ✅ Deploy to production

Enjoy your new terminal portfolio! 🚀

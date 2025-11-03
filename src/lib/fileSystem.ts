export interface FileNode {
  name: string
  type: 'file' | 'directory'
  content?: string
  children?: Record<string, FileNode>
}

export const fileSystem: Record<string, FileNode> = {
  home: {
    name: 'home',
    type: 'directory',
    children: {
      usoof: {
        name: 'usoof',
        type: 'directory',
        children: {
          skills: {
            name: 'skills',
            type: 'directory',
            children: {
              backend: {
                name: 'backend',
                type: 'file',
                content: `Backend Development Skills:
• Python (Expert) - 5+ years
• Django & Django REST Framework
• RESTful API Design
• Microservices Architecture
• API Documentation`
              },
              frontend: {
                name: 'frontend',
                type: 'file',
                content: `Frontend Development Skills:
• JavaScript (ES6+)
• React.js - Building scalable UIs
• Vue.js & Nuxt.js
• TailwindCSS & Bootstrap 5
• Responsive Design`
              },
              databases: {
                name: 'databases',
                type: 'file',
                content: `Database Expertise:
• PostgreSQL (Primary) - Complex queries & optimization
• MySQL
• Redis (Caching & Session Management)`
              },
              devops: {
                name: 'devops',
                type: 'file',
                content: `DevOps & Cloud Skills:
• AWS (ElasticBeanstalk)
• DigitalOcean
• Oracle Cloud Infrastructure (OCI)
• Git & GitHub
• CI/CD Pipelines
• Celery (Task Queue)
• Sentry (Monitoring)`
              },
              automation: {
                name: 'automation',
                type: 'file',
                content: `Automation & RPA:
• Automation Anywhere A360
• Power Automate
• UnifyApps
• Process Workflow Optimization
• 15+ FTE hours saved through automation`
              },
            }
          },
          experience: {
            name: 'experience',
            type: 'directory',
            children: {
              isa: {
                name: 'isa',
                type: 'file',
                content: `Automation Engineer
Information Systems Associate (ISA)
Apr 2024 - Present | Sharjah, UAE

Key Achievements:
• Developed end-to-end automation solutions using Python, Django & RPA
• Designed RESTful APIs for seamless system integration
• Achieved 25% reduction in processing time
• Saved 8+ FTE hours through workflow automation
• Created comprehensive system design documentation`
              },
              'air-arabia-officer': {
                name: 'air-arabia-officer',
                type: 'file',
                content: `Research & Development Officer
Air Arabia Academy
Jan 2023 - Apr 2024 | Sharjah, UAE

Key Achievements:
• Conducted business process analysis
• Designed and implemented integration APIs
• Reduced processing time by 15 minutes per transaction
• Led automation initiatives`
              },
              'air-arabia-coordinator': {
                name: 'air-arabia-coordinator',
                type: 'file',
                content: `Research & Development Coordinator
Air Arabia Academy
Oct 2020 - Jan 2023 | Sharjah, UAE

Key Achievements:
• Led full-stack web application development (Django + JS)
• Built Centralized Authentication System (SSO)
• Migrated legacy systems to modern tech stacks
• Managed AWS & DigitalOcean deployments
• Optimized database performance`
              },
            }
          },
          projects: {
            name: 'projects',
            type: 'directory',
            children: {
              'sso-system': {
                name: 'sso-system',
                type: 'file',
                content: `🔐 Centralized Authentication System (SSO)

Tech Stack: Django, PostgreSQL, JWT

Features:
• Single Sign-On solution for multiple applications
• Token-based authentication for enhanced security
• Integrated with 5+ existing applications
• Role-based access control

Impact: 40% reduction in authentication-related support tickets`
              },
              'automation-suite': {
                name: 'automation-suite',
                type: 'file',
                content: `🤖 Process Automation Suite

Tech Stack: Django, Automation Anywhere A360, PostgreSQL, REST APIs

Features:
• Custom Django applications integrated with RPA tools
• Automated financial and operational workflows
• Real-time monitoring dashboard with Power BI
• Automated report generation system

Impact: Saved 15+ FTE hours, 25% faster processing`
              },
              'api-platform': {
                name: 'api-platform',
                type: 'file',
                content: `🔌 API Integration Platform

Tech Stack: Django REST Framework, Redis, Celery

Features:
• Middleware solution connecting disparate systems
• Real-time data synchronization
• API gateway with rate limiting & caching
• Comprehensive API documentation

Impact: Enabled seamless data flow between 8 systems`
              },
              'bi-dashboard': {
                name: 'bi-dashboard',
                type: 'file',
                content: `📊 Business Intelligence Dashboard

Tech Stack: Django, React.js, PostgreSQL, Power BI

Features:
• Data visualization platform for operations
• Multi-source data integration
• Real-time analytics and reporting
• Role-based access control

Impact: Enabled data-driven decision making across departments`
              },
            }
          },
          education: {
            name: 'education',
            type: 'file',
            content: `🎓 Education & Certifications

Bachelor of Science in Computer Engineering
Ajman University, UAE (2014 - 2019)

Lean Six Sigma Green Belt Certification
Process improvement and quality management

Languages:
• Arabic (Native)
• Urdu (Native)
• Hindi (Native)
• English (Professional Working Proficiency)`
          },
          contact: {
            name: 'contact',
            type: 'file',
            content: `📧 Contact Information

Email:     yousuf.m.n@gmail.com
Phone:     +971 56 385 8825
Location:  Sharjah, UAE

LinkedIn:  linkedin.com/in/usoof-mansoor
GitHub:    github.com/usoof-mansoor

Open to:
• Full-time opportunities (Tech Lead / Senior roles)
• Freelance projects (Full-stack development)
• Consulting engagements (Architecture & Automation)
• Speaking opportunities (Tech talks & workshops)

Response time: Usually within 24 hours ⚡`
          }
        }
      }
    }
  }
}

export class FileSystemNavigator {
  private currentPath: string[] = ['home', 'usoof']

  getCurrentPath(): string {
    return '/' + this.currentPath.join('/')
  }

  getCurrentNode(): FileNode | null {
    let node: FileNode | undefined = fileSystem[this.currentPath[0]]

    for (let i = 1; i < this.currentPath.length; i++) {
      if (!node || !node.children) return null
      node = node.children[this.currentPath[i]]
    }

    return node || null
  }

  changeDirectory(path: string): { success: boolean; message: string } {
    if (path === '..') {
      if (this.currentPath.length > 2) {
        this.currentPath.pop()
        return { success: true, message: this.getCurrentPath() }
      }
      return { success: false, message: 'Already at root directory' }
    }

    if (path === '/' || path === '~') {
      this.currentPath = ['home', 'usoof']
      return { success: true, message: this.getCurrentPath() }
    }

    if (path.startsWith('/')) {
      const parts = path.split('/').filter(p => p)
      const newPath = parts.length === 0 ? ['home', 'usoof'] : parts

      if (this.isValidPath(newPath)) {
        this.currentPath = newPath
        return { success: true, message: this.getCurrentPath() }
      }
      return { success: false, message: `cd: ${path}: No such directory` }
    }

    const newPath = [...this.currentPath, path]
    const node = this.getNodeByPath(newPath)

    if (node && node.type === 'directory') {
      this.currentPath = newPath
      return { success: true, message: this.getCurrentPath() }
    }

    if (node && node.type === 'file') {
      return { success: false, message: `cd: ${path}: Not a directory` }
    }

    return { success: false, message: `cd: ${path}: No such directory` }
  }

  listDirectory(): string {
    const node = this.getCurrentNode()

    if (!node || node.type !== 'directory' || !node.children) {
      return 'Not a directory'
    }

    const items = Object.values(node.children).map(child => {
      const prefix = child.type === 'directory' ? '📁' : '📄'
      return `${prefix} ${child.name}`
    })

    return items.join('\n')
  }

  readFile(filename: string): { success: boolean; content: string } {
    const node = this.getCurrentNode()

    if (!node || node.type !== 'directory' || !node.children) {
      return { success: false, content: 'Not in a valid directory' }
    }

    const file = node.children[filename]

    if (!file) {
      return { success: false, content: `cat: ${filename}: No such file` }
    }

    if (file.type === 'directory') {
      return { success: false, content: `cat: ${filename}: Is a directory` }
    }

    return { success: true, content: file.content || '' }
  }

  private isValidPath(path: string[]): boolean {
    return this.getNodeByPath(path) !== null
  }

  private getNodeByPath(path: string[]): FileNode | null {
    if (path.length === 0) return null

    let node: FileNode | undefined = fileSystem[path[0]]

    for (let i = 1; i < path.length; i++) {
      if (!node || !node.children) return null
      node = node.children[path[i]]
    }

    return node || null
  }
}

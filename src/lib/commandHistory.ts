export class CommandHistory {
  private history: string[] = []
  private currentIndex: number = -1

  add(command: string): void {
    this.history.push(command)
    this.currentIndex = this.history.length
  }

  previous(): string | null {
    if (this.history.length === 0) return null
    if (this.currentIndex > 0) {
      this.currentIndex--
    }
    return this.history[this.currentIndex] || null
  }

  next(): string | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++
      return this.history[this.currentIndex]
    }
    this.currentIndex = this.history.length
    return null
  }

  getAll(): string[] {
    return [...this.history]
  }
}

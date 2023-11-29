export function setRandomValues() {
  const start = Math.round(Math.random() * 100)
  const executionTime = Math.round(Math.random() * 100)// + start

  return {
    start,
    executionTime
  }
}
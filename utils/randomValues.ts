export function setRandomValues() {
  const start = Math.round(Math.random() * 100)
  const end = Math.round(Math.random() * 100) + start

  return {
    start,
    end
  }
}
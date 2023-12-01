export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export function keyDownLikeButton(event: React.KeyboardEvent<HTMLElement>) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    event.currentTarget.click()
  }
}
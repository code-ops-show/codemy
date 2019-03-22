const duration = (duration: number): { minutes: string, seconds: string } => {
  const minutes = Math.floor(duration / 60)
  const seconds = duration - minutes * 60

  return { minutes: minutes.toString(), seconds: ('0' + seconds).slice(-2) }
}

export default duration

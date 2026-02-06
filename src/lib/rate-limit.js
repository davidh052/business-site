const requests = new Map()

const WINDOW_MS = 30 * 60 * 1000 // 30 minutes
const MAX_REQUESTS = 3

export function checkRateLimit(ip) {
  const now = Date.now()
  const record = requests.get(ip)

  if (!record || now - record.start > WINDOW_MS) {
    requests.set(ip, { start: now, count: 1 })
    return { allowed: true }
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false }
  }

  record.count++
  return { allowed: true }
}

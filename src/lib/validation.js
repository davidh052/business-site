export function validateContactForm({ name, email, message }) {
  if (!name || !name.trim()) {
    return 'Name is required'
  }
  if (!email || !email.trim()) {
    return 'Email is required'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return 'Invalid email format'
  }
  if (!message || !message.trim()) {
    return 'Message is required'
  }

  return null
}

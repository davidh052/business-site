function validateContactForm(req, res, next) {
  const { name, email, message } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: 'Name is required' });
  }
  if (!email || !email.trim()) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ message: 'Message is required' });
  }

  next();
}

module.exports = { validateContactForm };

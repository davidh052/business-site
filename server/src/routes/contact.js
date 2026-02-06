const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const { sendContactEmail, sendAutoReply } = require('../services/email');
const { validateContactForm } = require('../middleware/validation');

const contactLimiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 3,                    // 3 requests per IP per window
  message: { message: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/', contactLimiter, validateContactForm, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await sendContactEmail({ name, email, phone, message });
    await sendAutoReply({ name, email });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { sendContactEmail, sendAutoReply } = require('../services/email');
const { validateContactForm } = require('../middleware/validation');

router.post('/', validateContactForm, async (req, res) => {
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

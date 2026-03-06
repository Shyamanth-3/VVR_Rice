const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'contact-submissions.json');

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Vite dev server ports
  credentials: true
}));
app.use(express.json());

// Ensure data file exists
async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch (error) {
    // File doesn't exist, create it with empty array
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// Initialize data file on server start
ensureDataFile();

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, subject, and message are required'
      });
    }

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      subject: subject,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      dateSubmitted: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      })
    };

    // Read existing data
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const submissions = JSON.parse(data);

    // Add new submission to the beginning of array (most recent first)
    submissions.unshift(submission);

    // Write back to file
    await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));

    console.log(`New contact submission received from: ${name} (${email})`);

    res.json({
      success: true,
      message: 'Contact form submitted successfully',
      submissionId: submission.id
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
});

// Get all submissions (for admin purposes - you can remove this in production)
app.get('/api/contact', async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const submissions = JSON.parse(data);
    
    res.json({
      success: true,
      count: submissions.length,
      submissions: submissions
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      error: 'Error fetching submissions'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'VVR Rice Contact Form Server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 VVR Rice Contact Form Server running on http://localhost:${PORT}`);
  console.log(`📝 Contact submissions will be saved to: ${DATA_FILE}`);
});
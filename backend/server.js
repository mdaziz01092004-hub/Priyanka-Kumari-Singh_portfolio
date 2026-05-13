import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { saveContactMessage, getContactMessages } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Parse incoming JSON payloads
app.use(express.json());

// Rate Limiting to prevent contact form spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5, // Limit each IP to 5 contact form submissions per windowMs
  message: {
    error: 'Too many messages sent from this IP, please try again after 15 minutes.'
  },
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});

// Root GET route to provide explicit guidance when visiting the backend port directly
app.get('/', (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>Priyanka Portfolio API</title>
        <style>
          body { font-family: system-ui, sans-serif; background: #fdfbf7; color: #1e293b; padding: 3rem; text-align: center; }
          .card { max-w: 500px; margin: 0 auto; background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
          a { color: #d97706; text-decoration: none; font-weight: bold; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🌿 Backend API Running Successfully</h2>
          <p>You have accessed the backend API server port directly.</p>
          <p>To view Priyanka's complete interactive portfolio website, please access the React frontend client at:</p>
          <p style="font-size: 1.25rem; margin-top: 1.5rem;">
            👉 <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>
          </p>
        </div>
      </body>
    </html>
  `);
});

app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'active',
    service: 'Priyanka Kumari Singh Portfolio API',
    endpoints: ['POST /api/contact', 'GET /api/messages']
  });
});

// GET route to view all submitted messages from the database
app.get('/api/messages', async (req, res, next) => {
  try {
    const messages = await getContactMessages();
    return res.status(200).json({
      success: true,
      count: messages.length,
      messages
    });
  } catch (error) {
    next(error);
  }
});

// POST route to handle contact inquiries
app.post('/api/contact', contactLimiter, async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Validate payload
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Name is required.' });
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message content cannot be empty.' });
    }

    // Save payload to SQLite database
    await saveContactMessage(name.trim(), email.trim(), message.trim());

    // Return success response as specified
    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out, Priyanka will get back to you soon.'
    });
  } catch (error) {
    next(error);
  }
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    error: 'An unexpected internal server error occurred. Please try again later.'
  });
});

app.listen(PORT, () => {
  console.log(`Backend API server running gracefully on port ${PORT}`);
});

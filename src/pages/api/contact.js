// Simple in-memory rate limiter
const rateLimitMap = new Map();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // 5 submissions per hour per IP

function getRateLimitInfo(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.windowStart > WINDOW_MS) {
    const newRecord = { count: 1, windowStart: now };
    rateLimitMap.set(ip, newRecord);
    return { remaining: MAX_REQUESTS - 1, limit: MAX_REQUESTS };
  }

  record.count += 1;
  return { remaining: Math.max(0, MAX_REQUESTS - record.count), limit: MAX_REQUESTS };
}

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const rateInfo = getRateLimitInfo(ip);

  res.setHeader('X-RateLimit-Limit', rateInfo.limit);
  res.setHeader('X-RateLimit-Remaining', rateInfo.remaining);

  if (rateInfo.remaining <= 0) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil(WINDOW_MS / 1000 / 60),
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Bad Request: Missing fields' });
  }

  // Basic input sanitization - trim and strip HTML
  const sanitize = (str) => str.trim().replace(/<[^>]*>/g, '');

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `[Portfolio] ${sanitize(subject)}`,
      text: `Name: ${sanitize(name)}\nEmail: ${email}\n\n${sanitize(message)}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
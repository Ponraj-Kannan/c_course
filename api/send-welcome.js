/**
 * /api/send-welcome
 *
 * Sends a branded HTML welcome / access-granted email to a newly
 * whitelisted user via Zoho SMTP (using nodemailer).
 *
 * Called internally by /api/emails after a new email is added to the
 * whitelist. Also callable directly by the frontend as a fire-and-forget
 * notification (admin Bearer token required).
 *
 * Environment variables required:
 *   ZOHO_MAIL_USER         – Your Zoho email address, e.g. ponraj.kannan@faceprep.in
 *   ZOHO_MAIL_PASSWORD     – Your Zoho account password (or App Password if 2FA enabled)
 *   ZOHO_MAIL_FROM_NAME    – Sender display name, e.g. FACEPrep Team
 *   PROJECT_URL            – Public URL of the slide deck
 *
 * POST /api/send-welcome
 * Body: { email: string }
 * Auth: Bearer <admin Google ID token>
 * Returns: { success: true, message: string } | { error: string }
 */

import nodemailer from 'nodemailer'

const PROJECT_URL = process.env.PROJECT_URL || 'https://python-course-woad.vercel.app'
const FROM_USER = process.env.ZOHO_MAIL_USER || ''
const FROM_NAME = process.env.ZOHO_MAIL_FROM_NAME || 'FACEPrep Team'
const FROM_PASS = process.env.ZOHO_MAIL_PASSWORD || ''

// Admin emails — must match the list in emails.js
const ADMIN_EMAILS = [
  'ponrajacc@gmail.com',
  'gunatamil123@gmail.com',
]

// ── SMTP Transporter ────────────────────────────────────────────────────────

// Lazily created so missing env vars are caught at send time, not module load
let _transporter = null

function getTransporter() {
  if (_transporter) return _transporter

  if (!FROM_USER || !FROM_PASS) {
    throw new Error('ZOHO_MAIL_USER and ZOHO_MAIL_PASSWORD must be set in environment variables.')
  }

  _transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,           // SSL
    auth: {
      user: FROM_USER,
      pass: FROM_PASS,
    },
  })

  return _transporter
}

// ── Email Composer ──────────────────────────────────────────────────────────

/**
 * Builds the branded HTML body for the welcome email.
 * @param {string} recipientEmail
 * @returns {string}
 */
function buildWelcomeHtml(recipientEmail) {
  return /* html */`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to FACEPrep</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="90%" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header Banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#ffffff29 0%,#403f3f28 100%); border-radius:16px 16px 0px 0px; padding:36px 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="height: 30px;">
                      <img src="https://faceprep.in/images/brand/wordmark-on-light.svg" height="100%"/>
                    </div>
                    <div style="font-size:12px;margin-top:10px; font-size: .9rem;">
                      Interactive Learning Platform
                    </div>
                  </td>
                  <td align="right">
                    <div style="background:rgba(48, 48, 48, 0.116);border-radius:50%;width:52px;height:52px;display:inline-flex;align-items:center;justify-content:center;font-size:24px;">
                      🎓
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 20px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1a1a2e;letter-spacing:-0.3px;">
                You've been granted access! 🎉
              </h1>
              <p style="margin:0 0 20px;font-size:14px;color:#64748b;line-height:1.6;">
                Hi there,<br/><br/>
                An administrator has added <strong style="color:#ef5050;">${recipientEmail}</strong> to the
                FACEPrep interactive course slide deck. You can now sign in and access the full
                course materials.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:28px 0;">
                <tr>
                  <td align="center" style="border-radius:10px;background:linear-gradient(135deg,#ef5050,#c0392b);box-shadow:0 4px 14px rgba(239,80,80,0.35);">
                    <a
                      href="${PROJECT_URL}"
                      target="_blank"
                      rel="noopener noreferrer"
                      style="display:inline-block;padding:14px 36px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.3px;border-radius:10px;"
                    >
                      Open Course Slides →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Instructions -->
              <div style="background:#f8fafc;border-radius:10px;padding:16px 20px;border-left:3px solid #ef5050;margin-bottom:20px;">
                <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#334155;">How to get started:</p>
                <ol style="margin:0;padding-left:18px;font-size:13px;color:#475569;line-height:1.8;">
                  <li>Click the button above (or copy the link below)</li>
                  <li>Sign in with your Google or Zoho account using <strong>${recipientEmail}</strong></li>
                  <li>Enjoy the interactive slide deck!</li>
                </ol>
              </div>

              <!-- Plain link fallback -->
              <p style="font-size:12px;color:#94a3b8;word-break:break-all;margin:0 0 8px;">
                Or paste this URL in your browser:<br/>
                <a href="${PROJECT_URL}" style="color:#ef5050;text-decoration:none;">${PROJECT_URL}</a>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #f1f5f9;margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px 32px;">
              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6;">
                This email was sent because an administrator added your email address
                to the FACEPrep course access list. If you believe this was done in error,
                please ignore this email.
              </p>
              <p style="margin:8px 0 0;font-size:12px;color:#cbd5e1;">
                © ${new Date().getFullYear()} FACEPrep. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim()
}

// ── Core Send Function ──────────────────────────────────────────────────────

/**
 * Sends a welcome email to the given address via Zoho SMTP.
 * @param {string} toEmail
 */
async function sendWelcomeEmail(toEmail) {
  const transporter = getTransporter()

  const info = await transporter.sendMail({
    from: `"${FROM_NAME}" <${FROM_USER}>`,
    to: toEmail,
    subject: '🎓 You\'ve been granted access to FACEPrep Course Slides',
    html: buildWelcomeHtml(toEmail),
  })

  console.log(`[send-welcome] Email sent: ${info.messageId}`)
  return info
}

// ── Named export for internal (in-process) usage by emails.js ──────────────

/**
 * Sends a welcome email to the given address.
 * Exported so api/emails.js can call it without an HTTP round-trip.
 * @param {string} toEmail
 */
export async function sendWelcomeEmailInternal(toEmail) {
  return sendWelcomeEmail(toEmail)
}

// ── Vercel Serverless Handler ───────────────────────────────────────────────

// Verifies Google ID Token via Google's tokeninfo API
async function verifyGoogleToken(idToken) {
  if (!idToken) return null
  try {
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`)
    if (!response.ok) return null
    const payload = await response.json()
    const expectedClientId = '207254417956-jmlljaaj6kp3p8am8rdsivmsk9i6r7eu.apps.googleusercontent.com'
    if (payload.aud !== expectedClientId) return null
    return payload
  } catch {
    return null
  }
}

export default async function handler(req, res) {
  // ── CORS ─────────────────────────────────────────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })

  // ── Auth: require admin Bearer token ─────────────────────────────────────
  const authHeader = req.headers.authorization || ''
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' })
  }

  const token = authHeader.split(' ')[1]
  const tokenPayload = await verifyGoogleToken(token)

  if (!tokenPayload) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' })
  }

  const requesterEmail = tokenPayload.email
  if (!ADMIN_EMAILS.includes(requesterEmail)) {
    return res.status(403).json({ error: 'Forbidden: Only administrators can send welcome emails' })
  }

  // ── Validate body ─────────────────────────────────────────────────────────
  const { email } = req.body || {}
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Bad Request: Missing email field' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Bad Request: Invalid email address' })
  }

  // ── Send ──────────────────────────────────────────────────────────────────
  try {
    await sendWelcomeEmail(email.trim().toLowerCase())
    console.log(`[send-welcome] Welcome email sent to ${email}`)
    return res.status(200).json({
      success: true,
      message: `Welcome email sent to ${email}`,
    })
  } catch (err) {
    console.error('[send-welcome] Error:', err.message || err)
    return res.status(500).json({
      error: `Failed to send welcome email: ${err.message || 'Unknown error'}`,
    })
  }
}

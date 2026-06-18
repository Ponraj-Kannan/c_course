# Zoho Mail API — One-Time Setup Guide

This guide walks you through generating the **Zoho Mail refresh token** and **account ID** needed to send welcome emails.

---

## Prerequisites

- You already have a Zoho OAuth app registered at [api-console.zoho.com](https://api-console.zoho.com/) (the same one used for Zoho Sign-In).
- Your `ZOHO_CLIENT_ID` and `ZOHO_CLIENT_SECRET` are already in your `.env`.

---

## Step 1 — Add the Mail Scope to Your Zoho App

1. Go to [https://api-console.zoho.com/](https://api-console.zoho.com/)
2. Open your existing **Server-based Application**
3. Under **Scopes**, add:
   - `ZohoMail.messages.CREATE`
   - `ZohoMail.accounts.READ` *(needed to fetch your account ID)*
4. Save.

---

## Step 2 — Generate an Authorization Code (one-time, manual)

Build this URL and open it in your browser (replace placeholders):

```
https://accounts.zoho.in/oauth/v2/auth
  ?response_type=code
  &client_id=YOUR_CLIENT_ID
  &scope=ZohoMail.messages.CREATE,ZohoMail.accounts.READ
  &redirect_uri=https://python-course.vercel.app/zoho-callback.html
  &access_type=offline
  &prompt=consent
```

> **Important**: `access_type=offline` and `prompt=consent` are required to receive a refresh token.

After you approve, Zoho redirects to `/zoho-callback.html?code=XXXXX`. Copy the `code` value from the URL.

---

## Step 3 — Exchange the Code for Tokens

Run this `curl` in your terminal (replace placeholders):

```bash
curl -X POST "https://accounts.zoho.in/oauth/v2/token" \
  -d "grant_type=authorization_code" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=https://python-course.vercel.app/zoho-callback.html" \
  -d "code=THE_CODE_FROM_STEP_2"
```

Response:
```json
{
  "access_token": "...",
  "refresh_token": "1000.XXXXXXXXXX...",   ← copy this
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

Copy the `refresh_token` → set it as `ZOHO_MAIL_REFRESH_TOKEN` in your `.env`.

---

## Step 4 — Get Your Zoho Mail Account ID

With the `access_token` from above (valid for 1 hour), run:

```bash
curl "https://mail.zoho.in/api/accounts" \
  -H "Authorization: Zoho-oauthtoken YOUR_ACCESS_TOKEN"
```

Response includes an array of accounts. Find yours:
```json
{
  "data": [
    {
      "accountId": "12345678901234567",   ← copy this
      "emailAddress": [{ "mailId": "noreply@faceprep.in" }],
      "displayName": "FACEPrep Team"
    }
  ]
}
```

Copy the `accountId` → set it as `ZOHO_MAIL_ACCOUNT_ID` in your `.env`.

---

## Step 5 — Set Your `.env` Values

```env
ZOHO_MAIL_REFRESH_TOKEN=1000.XXXXXXXXXX...
ZOHO_MAIL_ACCOUNT_ID=12345678901234567
ZOHO_MAIL_FROM_ADDRESS=noreply@faceprep.in
ZOHO_MAIL_FROM_NAME=FACEPrep Team
PROJECT_URL=https://python-course.vercel.app
```

Also add these same values to your **Vercel Environment Variables** dashboard for production.

---

## Step 6 — Test

1. Log in as an admin at your project URL.
2. Open the Admin Panel (⚙ button in the footer).
3. Add a **new** test email address.
4. Check that email's inbox — you should receive the welcome email.

---

## Notes

- The refresh token **does not expire** unless you revoke it or regenerate it.
- The access token expires every 1 hour, but `send-welcome.js` refreshes it automatically.
- The sender email (`ZOHO_MAIL_FROM_ADDRESS`) must be a **verified address** in your Zoho Mail account.

# Ali Hassan Portfolio Website

## Overview

A fully responsive personal portfolio website built with **React + TypeScript** (Vite) on the frontend and **Node.js (Express)** on the backend, ready to deploy on **Vercel**.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Environment Variables](#environment-variables)
- [Deployment to Vercel](#deployment-to-vercel)
- [Available Scripts](#available-scripts)

## Project Structure

```
portfolio/
├── api/
│   └── contact.ts          # Vercel serverless function for contact form
├── src/
│   ├── components/         # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Experience, Projects, Contact
│   ├── data/               # content.ts — all CV content as typed constants
│   ├── App.tsx             # Main app with React Router routing
│   └── main.tsx            # Entry point
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.ts       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration (strict: true)
├── package.json            # Project dependencies and scripts
├── .env.example            # Environment variables example
└── README.md               # This file
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Vercel CLI](https://vercel.com/docs/cli) (for deployment)

## Local Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`.

3. **Build for production:**
   ```bash
   npm run build
   ```

   The build output will be in the `dist/` directory.

## Environment Variables

Create a `.env` file in the root directory. Based on `.env.example`:

```env
# SMTP / Email Service Configuration
# Uncomment and fill these values to enable email sending via nodemailer
#
# SMTP_HOST=smtp.example.com
# SMTP_PORT=587
# SMTP_USER=your-email@example.com
# SMTP_PASS=your-smtp-password

# OR use Resend API key
# RESEND_API_KEY=re_XXXXX

# Application
NODE_ENV=production
```

### Contact Form Backend

The `/api/contact` endpoint is a Vercel serverless function. During development, it will:

- **If SMTP credentials are configured**: Send an email via nodemailer
- **If no SMTP credentials**: Log the message to the console and return success

This structure allows you to swap in an email provider by simply adding the SMTP env vars - no code changes needed beyond that.

## Deployment to Vercel

### Step 1: Push to a Git Repository

Push this project to a Git repository (GitHub, GitLab, or Bitbucket).

### Step 2: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 3: Login to Vercel

```bash
vercel login
```

### Step 4: Deploy

```bash
vercel
```

Follow the prompts to set up your project. When asked, link it to your Git repository.

### Step 4: Add Environment Variables

Go to the Vercel Dashboard → Your Project → Settings → Environment Variables and add:

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | Your SMTP host (e.g., smtp.sendgrid.net) |
| `SMTP_PORT` | Your SMTP port (e.g., 587) |
| `SMTP_USER` | Your SMTP username/email |
| `SMTP_PASS` | Your SMTP password/api key |

If you don't add these env vars, the contact form will still work by logging messages to the console (useful for testing).

### Step 5: Enable Production

```bash
vercel --prod
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (Vite) |
| `npm run build` | Build for production (Vite) |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run preview` | Preview the production build locally |

## Contact Form Behavior

- **Client-side validation**: Name, email, and message fields are validated before submission
- **Server-side validation**: The `/api/contact` endpoint validates all input
- **Success feedback**: Toast/message displayed when message is sent
- **Error feedback**: Clear error message if submission fails
- **No SMTP configured**: Messages are logged to the console and success is returned

## Contacts

- **GitHub**: [https://github.com/AliHassan-code](https://github.com/AliHassan-code)
- **LinkedIn**: [https://www.linkedin.com/in/ali-hassan-choudhary/](https://www.linkedin.com/in/ali-hassan-choudhary/)
- **Email**: alihassantariq107@gmail.com
- **Phone**: 0327-3911676
- **Location**: Rahim Yar Khan, Punjab, Pakistan
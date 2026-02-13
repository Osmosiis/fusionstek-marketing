# Fusionstek Marketing Website

Marketing website for Fusionstek, an advanced cybersecurity web application providing domain security assurance services.

## Overview

This is a Next.js marketing website. The `/demo` page is a **waiting list** sign-up (name, email, company, company size). On submit, the user receives a thank-you email and the admin receives a notification at info@fusionstek.com. Email is sent via [Resend](https://resend.com); set `RESEND_API_KEY` in Vercel (see `.env.example`).

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **UI**: Tailwind CSS + shadcn/ui components
- **Forms**: React Hook Form + Zod validation
- **Authentication**: JWT tokens (jose library)
- **Analytics**: Event hooks (provider-agnostic)

## Features

### Core Functionality

- **Multi-domain submission**: Accept up to 5 domains per request
- **Security**: Signed one-time tokens bound to IP + User-Agent
- **Lead capture**: Comprehensive form with validation and error handling

### Pages

- `/` - Homepage with hero, features, use cases, and testimonials
- `/how-it-works` - Detailed process explanation and FAQ
- `/use-cases` - Industry-specific use cases
- `/why-us` - Differentiators and comparison
- `/demo` - Join the waiting list (sends confirmation email to user and notification to info@fusionstek.com)
- `/contact` - Contact form (reuses LeadForm component)

### Optional assets

- Place your Attack Surface dashboard screenshot at **`public/dashboard.png`** to show the platform preview on the homepage (section “See Your Attack Surface”).

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Access to Intake Gateway API

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skal-ventures-template
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (see `.env.example` for reference):
```bash
cp .env.example .env.local
```

4. Configure environment variables:
```env
NEXT_PUBLIC_INTAKE_GATEWAY_URL=https://your-intake-gateway-url.com
JWT_SECRET=your-secret-key-change-in-production
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Intake Gateway Integration

### API Routes

The application includes three API routes for Intake Gateway integration:

1. **`/api/intake/token`** (GET)
   - Issues a signed JWT token
   - Token TTL: 10 minutes
   - Bound to client IP + User-Agent hash

2. **`/api/intake/submit`** (POST)
   - Proxies metadata submission to Intake Gateway
   - Validates token and honeypot
   - Returns `demo_request_id` and `status`

3. **`/api/intake/status`** (GET)
   - Polls scan status from Intake Gateway
   - Requires valid token
   - Returns current scan status

### Data Flow

1. Browser requests token from Next.js API
2. Browser submits metadata to Next.js API (proxied to Intake Gateway)
3. If scan pending after 15s, browser polls status via Next.js API
4. Results displayed with `demo_request_id` reference

### Demo Confirmation Behavior

- Success state displays `demo_request_id` reference ID
- Users are informed that results will be emailed
- No links to platform/dashboard (intake request only)
- Processing state shown if scan takes longer than 15 seconds

## Security Features

### Token-Based Authentication

- Short-lived tokens (10-minute TTL)
- Bound to client IP address and User-Agent
- Prevents token reuse and abuse

### Honeypot Protection

- Hidden form field to catch bots
- Server-side validation rejects submissions with honeypot filled

### Rate Limiting

- Handled by Intake Gateway
- UI displays user-friendly rate limit messages

## Analytics Events

The application fires analytics events without PII:

- `demo_request_submitted` - Form submitted successfully
- `demo_request_success` - Scan completed successfully
- `demo_request_error` - Error occurred during submission
- `rate_limited` - Rate limit exceeded

To integrate with your analytics provider, implement handlers in your analytics setup.

## SEO & Performance

- Dynamic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration (`/robots.txt`)
- Metadata placeholders for all pages
- Next.js Image optimization
- Lazy loading for non-critical resources

## Project Structure

```
├── app/
│   ├── api/intake/        # API routes for Intake Gateway
│   ├── demo/              # Demo intake page
│   ├── how-it-works/      # Process explanation
│   ├── use-cases/         # Use case examples
│   ├── why-us/            # Differentiators
│   ├── contact/           # Contact form
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/
│   ├── forms/
│   │   └── lead-form.tsx  # Main intake form component
│   ├── layout/
│   │   ├── navbar.tsx     # Navigation component
│   │   └── footer.tsx      # Footer component
│   └── marketing/         # Reusable marketing components
└── lib/
    └── utils.ts           # Utility functions
```

## Environment Variables

See `.env.example` for required environment variables:

- `NEXT_PUBLIC_INTAKE_GATEWAY_URL` - Intake Gateway API base URL (required)
- `JWT_SECRET` - Secret key for JWT token signing (required)
- `NEXT_PUBLIC_BASE_URL` - Base URL for sitemap/robots.txt (optional)

## Contributing

1. Follow the existing code style and patterns
2. Ensure all forms use React Hook Form + Zod validation
3. Maintain accessibility standards (WCAG 2.1 AA)
4. Test all form submissions and error states
5. Update documentation for any API changes

## License

[Your License Here]

import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS for 2 years, include subdomains, allow preload
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Block clickjacking
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Limit referrer info sent cross-origin
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features not needed by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inline scripts + Vercel analytics
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Inline styles used by Tailwind/framer-motion
      "style-src 'self' 'unsafe-inline'",
      // Fonts and images from same origin + data URIs
      "font-src 'self'",
      "img-src 'self' data: blob:",
      // API calls: same origin + Resend
      "connect-src 'self' https://api.resend.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  // Block XSS in older browsers
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

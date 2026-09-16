# Christian's Cleaning Company — Website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS marketing site for
Christian's Cleaning Company, a home and commercial cleaning business serving
New York's Hudson Valley.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- No database, no auth, no external UI kit — deliberately simple and
  maintainable, suited to Vercel's zero-config deployment
- Fonts: Fraunces (serif) + Inter (sans), self-hosted via `next/font`

## Getting started

```bash
npm install
npm run dev
```

## Content

All business details — name, phone, email, address, service areas,
mission statement, reviews, and the supplied Google rating — live in one
place: `src/lib/site-config.ts`. Edit that file to update copy without
touching component code.

**Before launch, verify:**
- The Google rating and review count (`googleRating` in
  `site-config.ts`) — these were supplied as a point-in-time snapshot,
  not a live feed.
- The business address, which is currently used for contact/footer
  purposes only (not presented as a walk-in office).

## Imagery and logo

No authentic business photography or logo file was available at build
time. Per the brief, no logo was invented — the header uses a text
wordmark ("Christian's Cleaning Company"), and the hero/intro sections
use original line-art illustrations (`src/components/illustrations.tsx`)
instead of stock photography, so nothing implies a stock photo is a real
company photo or completed job.

**To swap in real photography:** replace the `<HeroIllustration />` and
`<IntroIllustration />` usages in `src/components/Hero.tsx` and
`src/components/Intro.tsx` with `next/image` components pointing at real
photos. **To swap in a real logo:** replace the wordmark `<a>` in
`src/components/Header.tsx` with an `<Image>` of the logo file, and
regenerate `src/app/icon.tsx` (currently a generated "CC" monogram) from
the real mark.

## Quote form (`/api/quote`)

The quote form is fully built, validated, and accessible, but **email
delivery is not connected in this repository by default** — no inquiry
is ever faked as "sent" or silently dropped. If the backend isn't
configured, the form clearly tells the visitor and points them to the
phone number and email address instead.

### To activate real delivery

The API route (`src/app/api/quote/route.ts`) sends via
[Resend](https://resend.com). Set these environment variables (in
Vercel's Project Settings → Environment Variables, or a local `.env`
file — never commit them):

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | API key from your Resend account |
| `QUOTE_TO_EMAIL` | Inbox that should receive quote requests |
| `QUOTE_FROM_EMAIL` | A sender address on a domain verified in Resend |

Once all three are set, the route sends the request by email and the
form shows a real success state only after Resend confirms delivery. If
you use a different provider, swap the `deliverEmail` function in that
same file — the validation, honeypot spam guard, and honest
unavailable/error states don't need to change.

Basic spam protection is a honeypot field only (no CAPTCHA/keys
required). No inquiry emails have been sent from this build — the
account is not configured with real credentials.

## Search indexing

The site is set to **not** be indexed by search engines until the
business approves launch (`robots.ts` and page metadata both return
`noindex`). To allow indexing, set:

```
NEXT_PUBLIC_ALLOW_INDEXING=true
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

## What was verified

- `npm run build` and `npm run lint` both pass cleanly.
- Checked at 1440px (desktop) and 390px (mobile) viewports: no
  horizontal overflow, sticky header quote button always visible and
  tappable, mobile menu opens/closes correctly, quote CTAs scroll to the
  form with correct spacing below the sticky header.
- Form validation (required fields, email format, conditional phone
  requirement) and the honest "not connected" delivery state were
  exercised end-to-end in a headless browser.
- Keyboard focus states are visible on interactive elements.

## What still needs real assets before launch

- Real business photography and/or logo file.
- Confirmation of the Google rating/review count snapshot.
- A configured email (or other) delivery backend for the quote form.
- A production domain, then flip `NEXT_PUBLIC_ALLOW_INDEXING=true`.

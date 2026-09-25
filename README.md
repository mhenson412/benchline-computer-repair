# Benchline Computer Repair — Website V1

This is a static, single-page website for the pre-launch version of Benchline Computer Repair.

## Files

- `index.html` — site structure and copy
- `styles.css` — responsive dark visual system
- `script.js` — mobile navigation, launch-spots display, and email-based diagnostic request
- `assets/logo-mark.svg` — Benchline logo mark
- `assets/favicon.svg` — browser favicon

## Important: Before Public Launch

Do **not** publish the site with placeholder business/legal information.

Update the following:

### 1. Business Email

Open `script.js` and change:

```js
businessEmail: "REPLACE_WITH_BUSINESS_EMAIL@example.com"
```

to the actual Benchline email.

### 2. Launch Spots Remaining

In `script.js`, edit:

```js
launchSpotsRemaining: 10
```

as customers qualify for the launch offer.

This is intentionally manual so the website does not create fake urgency or reset automatically.

### 3. Business Contact Information

In `index.html`, replace:

- `[BUSINESS EMAIL]`
- `[BUSINESS PHONE]`
- `[SERVICE AREA]`

### 4. Legal / Registration Information

In `index.html`, replace:

- `[INSERT REGISTRATION NUMBER]`

with the correct California BHGS Electronic Service Dealer registration information after registration is complete.

Also review all required business-name, address, local business-license, and consumer disclosure requirements before launch.

### 5. Final Compliance Review

Before launch, verify:

- current service prices
- launch promotion terms
- required consumer disclosures
- registration information
- business address/contact information
- warranty/guarantee terms
- testimonial incentive disclosure language
- privacy/data handling language

## Diagnostic Form

This website uses **no backend**.

When a customer submits the diagnostic form, JavaScript prepares an email and opens the customer's default email application.

This keeps V1 simple and avoids collecting customer information on a third-party server.

If you later want a real hosted form, booking system, or CRM integration, replace the form handler in `script.js`.

## Local Preview

You can open `index.html` directly in a browser.

For the most reliable preview, run a local web server:

### Python

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Hosting Options

This site can be uploaded to:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Any basic web host

No build process is required.

## Custom Domain

Once you purchase a domain, point it at whichever static host you choose. Keep the domain private/unpublished until your legal setup is complete.

## Design Direction

- dark charcoal / graphite
- off-white type
- restrained teal accent
- technical / diagnostic aesthetic
- responsive mobile layout
- minimal dependencies
- no third-party fonts or JavaScript libraries

## Launch Offer

Current V1 wording:

**First 10 qualifying customers receive 50% off eligible service labor. Parts are not discounted.**

Testimonial program:

**Customers who provide an honest testimonial and authorize Benchline to feature it may receive 10% off labor on their next eligible service.**

The testimonial does not need to be positive to qualify, and the discount is not conditioned on posting to a third-party review platform.

---

Benchline Computer Repair
Clear answers. Fair repairs.

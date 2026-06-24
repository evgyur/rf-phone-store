# RF Phone Store Design System

Primary reference: https://refero.design/pages/ab5dbc02-c985-43d2-8e20-33df77b743c0

The storefront is adapted from the Apple iPhone product/catalog page pattern: bright gallery canvas, product-first imagery, centered retail storytelling, compact blue purchase CTAs, and comparison sections that help customers choose without visual noise.

## Reference Lock

- Preserve: light `#f5f5f7` canvas, crisp white surfaces, large product imagery, rounded retail cards, compact blue pill buttons, restrained gray support text.
- Borrowed structure: Apple-style product strip, hero product stage, product configurator with color/storage choices, side-by-side comparison table.
- Reject: heavy poster borders, red accents, oversized decorative typography, black boxed sections, internal project explanations in customer-facing copy.

## Tokens

- Canvas: `#f5f5f7`.
- Surface: `#ffffff` and `#fbfbfd`.
- Product stage: pale brand-tinted gradients derived from each phone image.
- Text: `#1d1d1f`.
- Muted text: `#6e6e73` and `#86868b`.
- Border: `#d2d2d7` and translucent black dividers.
- CTA: `#0071e3` primary, `#1d1d1f` secondary.
- Radius: 18px for controls, 28-36px for cards and product stages.

## Typography

- Use `Inter` as a SF Pro-like body font.
- Use `Manrope` for display headings to avoid an Inter-only template feel while keeping a clean electronics-store tone.
- Headlines are large, bold, compact, and slightly tightened.
- Body copy stays calm, readable, and consumer-facing.
- Do not use decorative poster fonts for this direction.

## Layout

- Sticky translucent header with small navigation.
- Horizontal product strip near the top.
- Hero with left copy and a large product image stage.
- Product cards are image-first white retail tiles.
- Product page uses a large gallery on the left and a sticky purchase/configuration panel on the right.
- Checkout uses a two-column layout with persistent order summary.

## Components

- Primary CTA: blue rounded pill.
- Secondary CTA: dark rounded pill.
- Text links: Apple-like blue with trailing chevron.
- Filters/forms: white rounded inputs with blue focus ring.
- Option selectors: rounded bordered rows and active blue focus ring.
- Swatches: circular color choices with active ring.
- CSS should reference named design tokens instead of one-off color values outside `:root`.

## Checkout Flow Reference Lock

Primary flow references:

- Nike Checkout Purchase, Flow 2041: cart review, delivery mode, address, shipping speed, payment method, order review.
- ASOS Checkout with Click & Collect and Payment Validation, Flow 1597: pickup selection, contact validation, payment method reveal, inline field errors.
- Farfetch Address to Payment Checkout, Flow 3550: two-column checkout with persistent order summary, delivery address, delivery method, payment, external-payment recovery.

Applied flow:

1. Account: sign in or create account before checkout.
2. Bag: review items, subtotal, promo field, proceed to checkout.
3. Delivery: choose courier, pickup, or express; enter address/contact; choose delivery speed.
4. Payment: choose card, SBP, pay on delivery, or installment; show card fields and validation states.
5. Review: confirm account, delivery, payment, support details.
6. Success: order/request created with next merchant action.

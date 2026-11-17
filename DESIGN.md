# Lojer website design

## Reference

The [Solana homepage](https://solana.com/) was inspected on November 17, 2026, using Firecrawl branding extraction and a full-page capture at 1440px. The reference uses black as its ground, large two-weight headlines, wide media-led sections, a white pill action, and violet and teal light concentrated in the hero. Firecrawl reported Diatype, an 88px desktop H1, a 64px H2, violet `#9945FF`, black `#000000` and white `#FFFFFF`. Outlined secondary actions sit on dark surfaces. Lower sections alternate feature tiles, media, and compact data tables. The capture establishes the desktop reference.

## Lojer design tokens

| Role | Value |
| --- | --- |
| Page | `#08070A` |
| Raised surface | `#0F0E13` |
| Primary text | `#F8F6FB` |
| Secondary text | `#B9B5C5` |
| Lilac for actions and metrics | `#DDC9FF` |
| Mint for focus and wallet accents | `#8CF8CC` |
| Panel corner | 16px |
| Text and display family | Inter |
| Desktop content width | Up to 1320px |
| Outer gutter | 22–72px, fluid |

The reference's dark cinematic composition carries Lojer's own price-tag artwork and grocery-shopping story. The artwork occupies the right side on desktop and sits below the main action on phones. Both crops keep the price tag visible. The Lojer wordmark pairs with a barcode tag icon. The price receipt reuses the same barcode and lilac paper as the hero's preview link.

## Sections and behavior

- The sticky header uses inline section links on desktop and a toggle below 790px.
- The hero leads to the workflow and has a separate link to the interactive receipt. Buttons switch the receipt among capture, comparison, and rewards using illustrative data.
- The ecosystem tiles explain the planned marketplace, AI tools, and TON wallet.
- The Brazil section cites the [FecomercioSP 2025 e-commerce report](https://fecomercio.com.br/imprensa/e-commerce-teve-o-maior-faturamento-da-historia-em-2025-puxado-por-mais-hubs-empresas-e-mudancas-no-mercado-1/).
- The token ring is paired with a readable allocation list. The roadmap uses native disclosures. Contact links open email or LinkedIn.

## Artwork

Generated with the built-in image tool for Lojer and served locally.

- [Desktop hero](public/images/lojer-price-tag.webp), [mobile crop](public/images/lojer-price-tag-mobile.webp), and [share image](public/images/lojer-share.jpg) show a beveled, translucent violet price tag with an etched barcode and violet and teal studio light. The source prompt placed the object on the right with near-black space for the headline.
- [Brazil market image](public/images/lojer-brazil-market.webp) is an editorial illustration of a neighborhood produce shop in São Paulo at blue hour, with warm storefront light and fruit crates.

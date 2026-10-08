---
name: localization
description: Add or update translations for the Cresx Manna website. Use when user asks to translate text, add a new language, or manage i18n. Do not use for styling or component work.
---

# Localization

Use `next-intl` for internationalization in this Next.js 16 + React 19 project.

## Setup

1. Install: `npm install next-intl`
2. Add to `next.config.js` with `withNextIntl`
3. Create `messages/` directory with language JSON files (e.g., `en.json`, `fr.json`)
4. Structure: flat keys for UI strings, nested for page content

## Adding Translations

Place JSON files in `messages/`:
```
messages/
├── en.json    # English (default)
├── fr.json    # French
└── tw.json    # Twi (Ghanaian language)
```

## Using in Components

```tsx
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('Namespace');
  return <h1>{t('hero.headline')}</h1>;
}
```

## Key Conventions

- Section keys: `hero`, `nav`, `footer`, `about`, `products`
- Keep brand voice consistent across languages
- Translate strings, never hardcode user-facing text
- Use `t('key')` in client components, `<Trans>` for JSX content

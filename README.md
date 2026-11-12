# mil&dez website

Source of [miledez.com.br](https://www.miledez.com.br), the site of mil&dez Automação Ltda., a workflow automation agency in Belo Horizonte, Brazil.

Static, bilingual (PT-BR and EN) Next.js 14 site with TypeScript and Tailwind CSS, deployed on Vercel from `main`.

```bash
pnpm install
pnpm run dev      # http://localhost:3000
pnpm run lint
pnpm run build    # static export to out/
```

All copy lives in `lib/i18n/pt.ts` and `lib/i18n/en.ts`. Technical notes for contributors are in `CLAUDE.md`.

Public repository: no secrets, client data or internal plans.

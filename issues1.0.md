# Issues 1.0 — Changes, fixes, and next steps

## Summary
Short inventory of problems found and what I changed to fix them.

## Fixed issues
- **Missing image/CSS typings**: added [src/global.d.ts](src/global.d.ts) to declare `*.png`, `*.css`, etc.
- **GradientText import mismatch**: moved and typed the component to [src/components/ui/gradient-text.tsx](src/components/ui/gradient-text.tsx) and its stylesheet [src/components/ui/gradient-text.css](src/components/ui/gradient-text.css).
- **Implicit-any / JSX module warning**: replaced the `.jsx` module with a proper `.tsx` file so TypeScript has typings for the component.
- **Navbar import path**: changed import to the extensionless, resolver-friendly path in [src/components/Navbar.tsx](src/components/Navbar.tsx#L4).
- **EvilEye children + typing**: updated [src/components/ui/EvilEye.tsx](src/components/ui/EvilEye.tsx) to accept and render `children` and to keep typed props.
- **TSConfig deprecation warning**: added `"ignoreDeprecations": "6.0"` to [tsconfig.json](tsconfig.json) to silence the `baseUrl` deprecation message for now.

## Remaining issues / notes
- **Tailwind/PostCSS at-rule diagnostics in `src/index.css`**: editor/language-server flags unknown at-rules used by Tailwind/PostCSS (e.g. `@apply`, `@theme`, `@custom-variant`). These are not runtime TypeScript errors; they indicate your editor or PostCSS pipeline isn't configured for Tailwind/PostCSS.
  - Solutions:
    - Install and configure Tailwind/PostCSS so the editor recognizes the directives (recommended).
    - Or install an editor extension for Tailwind/PostCSS to silence warnings.
- **Editor caches**: after these changes, some diagnostics may persist until you restart the TypeScript server / Vite dev server / editor.

## Suggested next steps (commands)
Run these to add Tailwind (optional, only if you want full Tailwind/PostCSS support):

```bash
# from project root
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then update `tailwind.config.cjs` and your CSS entry per Tailwind docs, and restart the editor.

Other helpful actions:
- Restart the TypeScript server in VS Code: `Ctrl+Shift+P` → "TypeScript: Restart TS server".
- Restart Vite/dev server if running.

## Files changed by me
- [src/global.d.ts](src/global.d.ts)
- [src/components/ui/gradient-text.tsx](src/components/ui/gradient-text.tsx)
- [src/components/ui/gradient-text.css](src/components/ui/gradient-text.css)
- [src/components/ui/EvilEye.tsx](src/components/ui/EvilEye.tsx)
- [src/components/Navbar.tsx](src/components/Navbar.tsx)
- [tsconfig.json](tsconfig.json)

---
If you'd like, I can: (A) generate a minimal Tailwind/PostCSS config and wire `index.css` for you now, or (B) restart/guide restarting the TS/Vite servers to clear caches. Which do you want next?
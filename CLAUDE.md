# Christian's Cleaning Company — project instructions

Next.js 14 (App Router) + TypeScript + Tailwind marketing site. See `README.md`
for the stack, content config, and quote-form activation details.

## Design skills

Before any frontend work (new components, redesigns, styling, layout, or a
design review), load these project-level skills first:

- **`design-taste-frontend`** — anti-slop frontend/redesign skill.
  `.claude/skills/design-taste-frontend/SKILL.md`
- **`impeccable`** — design critique/audit/polish command set.
  `.claude/skills/impeccable/SKILL.md`
- **`ui-ux-pro-max`** — searchable UI/UX guideline and design-system database.
  `.claude/skills/ui-ux-pro-max/SKILL.md`

All three are installed under `.agents/skills/` (source of truth) with
project-scoped symlinks at `.claude/skills/` so they're available to any
Claude Code session opened on this repository, without a global/account-level
install. `skills-lock.json` records their exact source repos and content
hashes:

- `design-taste-frontend` ← [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)
- `impeccable` ← [pbakaus/impeccable](https://github.com/pbakaus/impeccable)
- `ui-ux-pro-max` ← [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

The same install (`Leonxlnx/taste-skill`, `nextlevelbuilder/ui-ux-pro-max-skill`)
also brought in several sibling skills as part of their repos' bundles
(`brand`, `design-system`, `ui-styling`, `minimalist-ui`, etc.) — see
`.claude/skills/` for the full list. They're available but not required
reading before frontend work the way the three above are.

## Applying these skills: brief wins over generic defaults

`design-taste-frontend` and `ui-ux-pro-max` both default toward general
SaaS/agency patterns (bento grids, bold color systems, motion-heavy heroes).
This is a trust-first local home-services brand, not a SaaS product — when a
skill's generic default conflicts with an explicit requirement from the
client brief (exact copy, specific content placement, the established
ivory/forest/sage palette, restrained motion), the brief wins. Treat skill
output as a checklist to verify against, not a template to force onto the
page. Note explicitly which findings were applied and which were
intentionally overridden, and why.

`impeccable`'s heavier flows (`scripts/impeccable context`, `detect`,
`live-server`) download and run an external binary and can open a local
server with source-file write access. Don't run them without the user's
explicit go-ahead in that session; its written reference material
(`reference/critique.md`, `reference/audit.md`, etc.) can be read and applied
manually without invoking the binary.

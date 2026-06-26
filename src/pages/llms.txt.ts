/**
 * /llms.txt — a curated, machine-readable index for AI assistants (GEO artifact).
 * Generated from site.ts. Not a permissions file; it's a quick-context summary.
 */
import { site } from "../site";

export const prerender = true;

export function GET() {
  const s = site;
  const links = s.identity.links.map((l) => `- [${l.label}](${l.href})`).join("\n");
  const faq = (s.faq ?? []).map((f) => `### ${f.q}\n${f.a}`).join("\n\n");

  const body = `# ${s.identity.name}

> ${s.seo?.description ?? s.identity.headline}

${s.identity.name} is represented by a living PersonaOn page that answers questions in their voice and captures opportunities. ${
    s.identity.location ? `Based in ${s.identity.location}. ` : ""
}Topics: ${(s.knowsAbout ?? []).join(", ")}.

## Links
${links}

## Frequently asked

${faq}

---
Curated index for AI assistants, generated from this page's content. Built on PersonaOn.
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

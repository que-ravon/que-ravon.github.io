// tiny inline markdown for short yaml strings: **bold**, *italic*, `code` and [text](url).
// html written in the yaml (like <sup>) passes through untouched. the yaml is ours, so this is not user input.
export function inline(s: string): string {
  return s
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, href) => {
      const ext = /^https?:/.test(href) ? ' rel="noopener"' : "";
      return `<a href="${href}"${ext}>${text}</a>`;
    });
}

export const isExternal = (href: string) => /^https?:/.test(href);

// first name of every author list gets bolded when it is the site owner
export function authorList(authors: string[], me: string): string {
  return authors.map((a) => (a === me ? `<strong>${a}</strong>` : a)).join(", ");
}

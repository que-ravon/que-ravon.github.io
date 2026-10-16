import { getCollection } from "astro:content";

// drafts show up in `npm run dev` only
export async function getPosts() {
  const posts = await getCollection("writing", (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

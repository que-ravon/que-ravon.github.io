import { getCollection } from "astro:content";

type YamlCollection =
  | "news"
  | "education"
  | "experience"
  | "projects"
  | "papers"
  | "research"
  | "achievements"
  | "skills"
  | "puzzles";

// getCollection sorts by id, so put entries back in the order they have in the yaml file
export async function list<C extends YamlCollection>(name: C) {
  const items = await getCollection(name);
  return items.sort((a, b) => a.data.order - b.data.order);
}

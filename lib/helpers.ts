export function capitalize(text: string) {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-");
}

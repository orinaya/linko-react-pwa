export function slugify(text) {
  return text
    .toString()
    .normalize("NFD")                   // Enlève les accents // remove accents
    .replace(/[\u0300-\u036f]/g, "")    // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")       // replace everything except a-z, 0-9 with "-"
    .replace(/^-+|-+$/g, "");          // remove leading and trailing dashes
}

export function getTodayDateString() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString.replace(" ", "T"));
  return date.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // hour12: false,
  });
}

export function formatISODateTime(isoString) {
  if(!isoString)return "وارد نشده"
  const date = new Date(isoString);

  const persianDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  const persianTime = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);

  return `${persianDate} ${persianTime}`;
}

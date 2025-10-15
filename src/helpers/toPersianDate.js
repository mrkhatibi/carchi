export function toPersianDateTime(isoString) {
  const date = new Date(isoString);

  const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Tehran", 
  });

  const timeFormatter = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Tehran",
  });

  const toEnglishNumber = str => str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

  const persianDate = toEnglishNumber(dateFormatter.format(date));
  const persianTime = toEnglishNumber(timeFormatter.format(date));

  return `${persianDate} ساعت : ${persianTime}`;
}



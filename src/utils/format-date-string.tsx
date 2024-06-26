export const FormatDateString = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const offset = -date.getTimezoneOffset();
  const offsetHours = Math.floor(offset / 60)
    .toString()
    .padStart(2, "0");
  const offsetMinutes = (offset % 60).toString().padStart(2, "0");
  const offsetSign = offset >= 0 ? "+" : "-";

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}${offsetMinutes}`;
};

export function parseDate1(elem) {
  const numEl = parseInt(elem.match(/\d+/));

  const d = new Date(numEl).toLocaleString("en", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });
  return d;
}

export function parseDate(elem) {
  //parse numbers
  const numEl = parseInt(elem.match(/\d+/));

  //convert to date
  const d = new Date(numEl).toLocaleString("en", {
    year: "2-digit",
    day: "numeric",
    month: "numeric",
  });
  return d;
}

export function getTimeStatus(ShippedDate, RequiredDate) {
  if (RequiredDate > ShippedDate) {
    return { text: "Urgent", class: "shipped-time-urgent" };
  } else if (RequiredDate === ShippedDate) {
    return { text: "In Time", class: "shipped-time-in" };
  } else {
    return { text: "To late", class: "shipped-time-late" };
  }
}

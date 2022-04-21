const renderList = () => {
  const orders = document.getElementById("list");
  listOrder.d.results.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("main-wrapper-selection-block");

    const divContainer1 = document.createElement("div");
    divContainer1.classList.add("container");

    const divContainer2 = document.createElement("div");
    divContainer2.classList.add("container");

    const p1 = document.createElement("p");
    p1.classList.add("orders-number");

    const p2 = document.createElement("p");
    p2.classList.add("orders-date");

    const p3 = document.createElement("p");
    p3.classList.add("orders-info");

    const p4 = document.createElement("p");
    /*p4.classList.add(getClassByStatus);????????????????*/

    const p5 = document.createElement("p");
    p5.classList.add("shipped-time-urgent");

    const p6 = document.createElement("p");
    p6.classList.add("shipped-time-in");

    const p7 = document.createElement("p");
    p7.classList.add("shipped-time-late");

    p1.innerText = "Order " + element.OrderID;
    p2.innerText = parseDate(element.OrderDate);

    const t1 = document.createTextNode(element.ShipName);
    const br = document.createElement("br");
    const t2 = document.createTextNode(
      "Shipped: " + parseDate1(element.ShippedDate)
    );

    p3.append(t1, br, t2);

    const timeStatus = getTimeStatus(element.ShippedDate, element.RequiredDate);
    p4.innerText = timeStatus;
    /*p5.innerText = timeStatus;
    p6.innerText = timeStatus;
    p7.innerText = timeStatus;*/

    divContainer1.append(p1, p2);
    divContainer2.append(p3, p4 /*p5, p6, p7*/);

    div.append(divContainer1, divContainer2);

    orders.appendChild(div);
  });
};
renderList();

function parseDate(elem) {
  /*parse numbers*/
  const numEl = parseInt(elem.match(/\d+/));

  /*convert to date*/
  const d = new Date(numEl).toLocaleString("en", {
    year: "2-digit",
    day: "numeric",
    month: "numeric",
  });
  return d;
}

function parseDate1(elem) {
  const numEl = parseInt(elem.match(/\d+/));

  const d = new Date(numEl).toLocaleString("en", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });
  return d;
}

/*function getTimeStatus()*/
function getTimeStatus(ShippedDate, RequiredDate) {
  if (RequiredDate > ShippedDate) {
    return "Urgent";
  } else if (RequiredDate === ShippedDate) {
    return "In time";
  } else {
    return "Too late";
  }
}

/*function getClassByStatus()
function getClassByStatus(timeStatus) {
  if (timeStatus === "Urgent") {
    return p5;
  } else if (timeStatus === "In time") {
    return p6;
  } else {
    return p7;
  }
}

/*function getTimeStatus(ShippedDate, RequiredDate) {
  if (RequiredDate > ShippedDate) {
    return p5;
  } else if (RequiredDate === ShippedDate) {
    return p6;
  } else {
    return p7;
  }
}*/

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
    /*p4.classList.add("orders-number");????????????????*/

    p1.innerText = "Order " + element.OrderID;
    p2.innerText = parseDate(element.OrderDate);

    const t1 = document.createTextNode(element.ShipName);
    const br = document.createElement("br");
    const t2 = document.createTextNode(
      "Shipped: " + parseDate(element.ShippedDate)
    );

    p3.append(t1, br, t2);
    p4.innerText = timeStatus(element.ShippedDate, element.RequiredDate);

    divContainer1.append(p1, p2);
    divContainer2.append(p3, p4);

    div.append(divContainer1, divContainer2);

    orders.appendChild(div);
  });
};
renderList();

function parseDate(OrderDate) {
  /*parse numbers*/
  const numEl = parseInt(OrderDate.match(/\d+/));

  /*convert to date*/ /* only month + 1??? */
  const d = new Date(numEl);
  const t =
    d.getMonth() +
    1 +
    "/" +
    d.getDay() +
    "/" +
    d
      .getFullYear()
      .toString()
      .substr(-2); /*.toString().substr(-2) -------last 2 numbers*/
  return t;
}

/*function timestatus()*/
function timeStatus(ShippedDate, RequiredDate) {
  if (RequiredDate > ShippedDate) {
    return "Urgent";
  } else if (RequiredDate === ShippedDate) {
    return "In time";
  } else {
    return "Too late";
  }
}

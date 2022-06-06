import { tableInfo } from "./view.js";
import {
  parseDate,
  parseDate1,
  getTimeStatus,
} from "./modules/dateProcessing.js";

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

    p1.innerText = "Order " + element.OrderID;
    p2.innerText = parseDate(element.OrderDate);

    const t1 = document.createTextNode(element.ShipName);
    const br = document.createElement("br");
    const t2 = document.createTextNode(
      "Shipped: " + parseDate1(element.ShippedDate)
    );

    p3.append(t1, br, t2);

    const timeStatus = getTimeStatus(element.ShippedDate, element.RequiredDate);
    p4.innerText = timeStatus.text;
    p4.classList.add(timeStatus.class);

    divContainer1.append(p1, p2);
    divContainer2.append(p3, p4);

    div.append(divContainer1, divContainer2);

    orders.appendChild(div);
  });
};
renderList();

/*selection on click*/
document.addEventListener("click", function (event) {
  const activeItems = document.querySelectorAll(
    ".main-wrapper-selection-block.active"
  );

  for (const element of activeItems) {
    element.classList.remove("active");
  }
  const outerBlock = event.target.closest(".main-wrapper-selection-block");
  //console.log(outerBlock);

  if (outerBlock) {
    outerBlock.classList.toggle("active");
    const orderIdNode = outerBlock.getElementsByClassName("orders-number")[0];

    const orderIdNodeInnerText = orderIdNode.innerText;

    const orderID = orderIdNodeInnerText.split(" ")[1];

    const order = listOrder.d.results.find(
      (element) => element.OrderID == orderID
    );

    tableInfo(order);
  }
});

import clearFields from "./modules/clearFields.js";
import { parseDate1 } from "./modules/dateProcessing.js";
//import renderTableItems from "./modules/getTableData.js";

const getID = {
  ordersNumber: document.getElementById("ordersNumber"),
  customerName: document.getElementById("customerName"),
  orderedTime: document.getElementById("orderedTime"),
  shippedTime: document.getElementById("shippedTime"),
  totalPrice: document.getElementById("totalPrice"),
  titleProduct: document.getElementById("titleProduct"),
  streetProduct: document.getElementById("streetProduct"),
  zipCityProduct: document.getElementById("zipCityProduct"),
  regionProduct: document.getElementById("regionProduct"),
  countryProduct: document.getElementById("countryProduct"),
  lineItems: document.getElementById("lineItems"),
};

export const tableInfo = (order) => {
  clearFields(getID);

  const orders = document.createElement("span");
  orders.classList.add("count-orders");
  orders.innerText = "Order " + order.OrderID;
  getID.ordersNumber.appendChild(orders);

  const customer = document.createElement("span");
  customer.innerText = order.ShipName;
  getID.customerName.appendChild(customer);

  const timeOrder = document.createElement("span");
  timeOrder.innerText = parseDate1(order.OrderDate);
  getID.orderedTime.appendChild(timeOrder);

  const timeShipped = document.createElement("span");
  timeShipped.innerText = parseDate1(order.ShippedDate);
  getID.shippedTime.appendChild(timeShipped);

  const priceTotal = document.createElement("span");
  priceTotal.classList.add("price-info");
  priceTotal.innerText = "TTTTT";
  /*order.Order_Details.results.Quantity *
      order.Order_Details.results.UnitPrice +
    "EUR"*/
  console.log(priceTotal);/* Correct View in console*/
  getID.totalPrice.appendChild(priceTotal);

  const title = document.createElement("span");
  title.classList.add("name-value");
  title.innerText = order.ShipName;
  getID.titleProduct.appendChild(title);

  const street = document.createElement("span");
  street.classList.add("name-value");
  street.innerText = order.ShipAddress;
  getID.streetProduct.appendChild(street);

  const zipCity = document.createElement("span");
  zipCity.classList.add("name-value");
  zipCity.innerText = order.ShipPostalCode + "  " + order.ShipCity;
  getID.zipCityProduct.appendChild(zipCity);

  const region = document.createElement("span");
  region.classList.add("name-value");
  region.innerText = order.ShipRegion;
  getID.regionProduct.appendChild(region);

  const country = document.createElement("span");
  country.classList.add("name-value");
  country.innerText = order.ShipCountry;
  getID.countryProduct.appendChild(country);

  const line = document.createElement("div");
  line.classList.add("caption-order-details");
  line.innerText =
    "Order Details " + "(" + order.Order_Details.results.length + ")";
  lineItems.appendChild(line);

  /*get table data*/
  const renderTableItems = () => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    totalPrice.innerHTML = "";

    const tableItems = order.Order_Details.results.forEach((element) => {
      const tr1 = document.createElement("tr");
      tr1.classList.add("text-table");
      const td1 = document.createElement("td");
      td1.classList.add("item-name");
      const nodeB = document.createElement("b");
      nodeB.innerText = element.Product.ProductName;

      td1.appendChild(nodeB);
      const td2 = document.createElement("td");
      td2.classList.add("item-name");
      td2.innerText = element.UnitPrice + " EUR";
      console.log(element);
      const td3 = document.createElement("td");
      td3.classList.add("text-table-right");
      td3.innerText = element.Quantity;
      const td4 = document.createElement("td");
      td4.classList.add("text-table-right");
      const total = element.Quantity * element.UnitPrice;
      td4.innerText = total + " EUR";

      tr1.append(td1, td2, td3, td4);

      tbody.appendChild(tr1);
    });
  };
  renderTableItems();
};

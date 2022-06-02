import clearFields from "./modules/clearFields.js";
import parseDate1 from "./modules/parseDate1.js";
const getID = {
  ordersNumber: document.getElementById("ordersNumber"),
  customerName: document.getElementById("customerName"),
  orderedTime: document.getElementById("orderedTime"),
  shippedTime: document.getElementById("shippedTime"),
  totalPrice: document.getElementById("totalPrice"),
  titleProduct: document.getElementById("titleProduct"),
  streetProduct: document.getElementById("streetProduct"),
  zipCityProduct: document.getElementById("zip-cityProduct"),
  regionProduct: document.getElementById("regionProduct"),
  countryProduct: document.getElementById("countryProduct"),
  lineItems: document.getElementById("lineItems"),
};

export const tableInfo = (order) => {
  /* get Shipping address*/
  /*const clearFields = () => {
    ordersNumber.innerHTML = "";
    customerName.innerHTML = "";
    orderedTime.innerHTML = "";
    shippedTime.innerHTML = "";
    totalPrice.innerHTML = "";
    titleProduct.innerHTML = "";
    streetProduct.innerHTML = "";
    zipCityProduct.innerHTML = "";
    regionProduct.innerHTML = "";
    countryProduct.innerHTML = "";
    lineItems.innerHTML = "";
  };*/
  clearFields(getID);

  /*const setFieldsData = () => {
    const ordersNumber = document.getElementById("ordersNumber");
    const customerName = document.getElementById("customerName");
    const orderedTime = document.getElementById("orderedTime");
    const shippedTime = document.getElementById("shippedTime");
    const totalPrice = document.getElementById("totalPrice");
    const titleProduct = document.getElementById("titleProduct");
    const streetProduct = document.getElementById("streetProduct");
    const zipCityProduct = document.getElementById("zip-cityProduct");
    const regionProduct = document.getElementById("regionProduct");
    const countryProduct = document.getElementById("countryProduct");
    const lineItems = document.getElementById("lineItems");
  };
  setFieldsData();*/

  const orders = document.createElement("span");
  orders.classList.add("count-orders");
  orders.innerText = "Order " + order.OrderID;
  ordersNumber.appendChild(orders);

  const customer = document.createElement("span");
  customer.innerText = order.ShipName;
  customerName.appendChild(customer);

  const timeOrder = document.createElement("span");
  timeOrder.innerText = parseDate1(order.OrderDate);
  orderedTime.appendChild(timeOrder);

  const timeShipped = document.createElement("span");
  timeShipped.innerText = parseDate1(order.ShippedDate);
  shippedTime.appendChild(timeShipped);

  const title = document.createElement("span");
  title.classList.add("name-value");
  title.innerText = order.ShipName;
  titleProduct.appendChild(title);

  const street = document.createElement("span");
  street.classList.add("name-value");
  street.innerText = order.ShipAddress;
  streetProduct.appendChild(street);

  const zipCity = document.createElement("span");
  zipCity.classList.add("name-value");
  zipCity.innerText = order.ShipPostalCode + "  " + order.ShipCity;
  zipCityProduct.appendChild(zipCity);

  const region = document.createElement("span");
  region.classList.add("name-value");
  region.innerText = order.ShipRegion;
  regionProduct.appendChild(region);

  const country = document.createElement("span");
  country.classList.add("name-value");
  country.innerText = order.ShipCountry;
  countryProduct.appendChild(country);

  const line = document.createElement("div");
  line.classList.add("caption-order-details");
  line.innerText =
    "Order Details " + "(" + order.Order_Details.results.length + ")";
  lineItems.appendChild(line);

  /*const price = document.createElement("span");
  price.innerText =
    element.Order_Details.results.Quantity *
      element.Order_Details.results.UnitPrice +
    "EUR";
  console.log(price);
  totalPrice.appendChild(price);*/

  /*get table data*/
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
    console.log(element.Product.ProductName);
    const td3 = document.createElement("td");
    td3.classList.add("text-table-right");
    td3.innerText = element.Quantity;
    console.log(element.Quantity);
    const td4 = document.createElement("td");
    td4.classList.add("text-table-right");
    const total = element.Quantity * element.UnitPrice;
    td4.innerText = total + " EUR";

    tr1.append(td1, td2, td3, td4);

    tbody.appendChild(tr1);
  });
};

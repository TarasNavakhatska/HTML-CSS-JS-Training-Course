/*const orderInfo = () => {
  const info = document.getElementById("render_click");
  listOrder.d.results.forEach((element) => {
    const divOrder = document.createElement("div");
    divOrder.classList.add("description-block");

    const divHeader = document.createElement("div");
    divHeader.classList.add("right-header");
    divHeader.innerText = "HHHH" + element.ShipVia;

    divOrder.appendChild(divHeader);

    info.appendChild(divOrder);
  });
};

orderInfo();*/
//tableInfo();
const tableInfo = (order) => {
  //console.log(order.Order_Details.results);
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  order.Order_Details.results.forEach((element) => {
    const tr1 = document.createElement("tr");
    tr1.classList.add("text-table");
    const td1 = document.createElement("td");
    td1.classList.add("item-name");
    const nodeB = document.createElement("b");
    nodeB.innerText = element.Product.ProductName;
    console.log(element.Product);
    td1.appendChild(nodeB);
    const td2 = document.createElement("td");
    td2.classList.add("item-name");
    td2.innerText = element.Product.UnitPrice + " EUR";
    //console.log(element);

    const td3 = document.createElement("td");
    td3.classList.add("text-table-right");
    td3.innerText = element.Quantity;
    //console.log(element.Quantity);
    const td4 = document.createElement("td");
    td4.classList.add("text-table-right");
    const total = element.Quantity * element.Product.UnitPrice;
    td4.innerText = total + " EUR";

    tr1.append(td1, td2, td3, td4);

    tbody.appendChild(tr1);
  });

  //order.d.results.forEach((element) => {
  //console.log(element);
  //});
};

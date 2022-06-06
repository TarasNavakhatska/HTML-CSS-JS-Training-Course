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
export default renderTableItems;

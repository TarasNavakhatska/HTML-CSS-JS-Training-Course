const tableInfo = (order) => {
  /* get Shipping address*/
  const titleProduct = document.getElementById("titleProduct");
  const streetProduct = document.getElementById("streetProduct");
  const zipProduct = document.getElementById("zipProduct");
  const regionProduct = document.getElementById("regionProduct");
  const countryProduct = document.getElementById("countryProduct");

  titleProduct.innerHTML = "";
  streetProduct.innerHTML = "";
  zipProduct.innerHTML = "";
  regionProduct.innerHTML = "";
  countryProduct.innerHTML = "";

  listOrder.d.results.forEach((element) => {
    if (element.OrderID === order.OrderID) {
      const title = document.createElement("span");
      title.classList.add("name-value");
      title.innerText = element.ShipName;
      titleProduct.appendChild(title);

      const street = document.createElement("span");
      street.classList.add("name-value");
      street.innerText = element.ShipAddress;
      streetProduct.appendChild(street);

      const zip = document.createElement("span");
      zip.classList.add("name-value");
      zip.innerText = element.ShipPostalCode;
      zipProduct.appendChild(zip);

      const region = document.createElement("span");
      region.classList.add("name-value");
      region.innerText = element.ShipRegion;
      regionProduct.appendChild(region);

      const country = document.createElement("span");
      country.classList.add("name-value");
      country.innerText = element.ShipCountry;
      countryProduct.appendChild(country);
    }
  });
  /*get table data*/
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  order.Order_Details.results.forEach((element) => {
    const tr1 = document.createElement("tr");
    tr1.classList.add("text-table");
    const td1 = document.createElement("td");
    td1.classList.add("item-name");
    const nodeB = document.createElement("b");
    nodeB.innerText = element.Product.ProductName;
    //console.log(element.Product);

    td1.appendChild(nodeB);
    const td2 = document.createElement("td");
    td2.classList.add("item-name");
    td2.innerText = element.Product.UnitPrice + " EUR";
    console.log(element);
    console.log(element.Product.ProductName);
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
};

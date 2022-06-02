const clearFields = (getID) => {
  getID.ordersNumber.innerHTML = "";
  getID.customerName.innerHTML = "";
  getID.orderedTime.innerHTML = "";
  getID.shippedTime.innerHTML = "";
  getID.totalPrice.innerHTML = "";
  getID.titleProduct.innerHTML = "";
  getID.streetProduct.innerHTML = "";
  getID.zipCityProduct.innerHTML = "";
  getID.regionProduct.innerHTML = "";
  getID.countryProduct.innerHTML = "";
  getID.lineItems.innerHTML = "";
};
export default clearFields;

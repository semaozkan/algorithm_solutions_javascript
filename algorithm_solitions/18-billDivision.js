function bonAppetit(bill, k, b) {
  let totalBill = bill.reduce((acc, num) => acc + num, 0);

  if (b == totalBill / 2 - bill[k] / 2) {
    console.log("Bon Appetit");
  } else {
    let debt = bill[k] / 2;
    console.log(debt);
  }
}

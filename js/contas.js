// Define product data
const products = {
  "Conta Smurf Bronze": {price: 40, id: "1"},
  "Conta Smurf Prata": {price: 50, id: "2"},
  "Conta Smurf Ouro": {price: 60, id: "3"},
  "Conta Smurf Platina": {price: 70, id: "4"},
  "Conta Smurf Diamante": {price: 80, id: "5"},
  "Conta Smurf Mestre": {price: 90, id: "6"},
  "Conta Smurf Grão-Mestre": {price: 100, id: "7"},
  "Conta Smurf Desafiante": {price: 110, id: "8"},
};

function myFunction() {
  // Get selected product
  const selectedProduct = document.getElementById("mySelect").value;

  // Find product data
  const productData = products[selectedProduct];

  // Update price display
  document.getElementById("demo").innerHTML = "R$ " + productData.price;

  // Update buy now button
  document.getElementById("comprar").href = "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=" + productData.id;
}

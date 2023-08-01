// Define product data
const products = {
  "basica": {price: '14.90', id: '17j16Hw'},
  "ferro": {price: '35', id: '1WyQRsC'},
  "bronze": {price: '99', id: 'ID Conta Smurf Bronze'},
  "prata": {price: '99', id: 'ID Conta Smurf Prata'},
  "ouro": {price: '99', id: 'ID Conta Smurf Ouro'},
  "platina": {price: '99', id: 'ID Conta Smurf Platina'},
  "diamante": {price: '99', id: 'ID Conta Smurf Diamante'},
  "ascendente": {price: '99', id: 'ID Conta Smurf Ascendente'},
  "fa": {price: 'R$149', id: '2X73zVH'},
};

function updateProductInfo() {
  // Get selected product
  const selectedProduct = document.getElementById("listaContas").value;

  // Find product data
  const productData = products[selectedProduct];

  // Update price display
  document.getElementById("price").innerHTML = productData.price;
}

function comprar() {
  // Get selected product
  const selectedProduct = document.getElementById("listaContas").value;

  // Open MercadoPago URL in a new tab
  window.open("https://mpago.la/" + products[selectedProduct].id);
}

// Update product info when the selected product changes
document.getElementById("listaContas").addEventListener("change", updateProductInfo);

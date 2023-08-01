// Define product data
const products = {
  "basica": {price: 'R$14.90', id: '17j16Hw'},
  "ferro": {price: 'R$39', id: '1WyQRsC'},
  "bronze": {price: 'R$34', id: '2pNZ38n'},
  "prata": {price: 'R$30', id: '1nbWDSn'},
  "ouro": {price: 'R$30', id: '2Se3YAB'},
  "platina": {price: 'R$44', id: '122YuJR'},
  "diamante": {price: 'R$45', id: '2CXXrF4'},
  "ascendente": {price: 'R$50', id: '1SaFdAY'},
  "fa": {price: 'R$147', id: '2QHW1jT'},
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

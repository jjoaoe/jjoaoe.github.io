// Define product data
const products = {
  "Conta Sem Elo (Ranked Liberada)": {
    price: 14.90, 
    id: "17j16Hw"
  },
  "Conta Smurf Ferro": {
    price: 99, 
    id: "1WyQRsC"
  },
  "Conta Smurf Bronze": {
    price: 99, 
    id: "2pNZ38n"
  },
  "Conta Smurf Prata": {
    price: 99, 
    id: "1nbWDSn"
  },
  "Conta Smurf Ouro": {
    price: 99, 
    id: "2Se3YAB"
  },
  "Conta Smurf Platina": {
    price: 99, 
    id: "122YuJR"
  },
  "Conta Smurf Diamante": {
    price: 99, 
    id: "2CXXrF4"
  },
  "Conta Smurf Ascendente": {
    price: 99, 
    id: "1SaFdAY"
  },
  "Conta Sem Elo FULL ACCESS (Ranked Liberada)": {
    price: 149, 
    id: "2X73zVH"
  },
};

function myFunction() {
  // Get selected product
  const selectedProduct = document.getElementById("listaContas").value;

  // Find product data
  const productData = products[selectedProduct];

  // Update price display
  // You will need to add the actual prices for the products
  document.getElementById("demo").innerHTML = "R$ " + productData.price;

  // Update buy now button
  document.getElementById("comprar").href = "https://mpago.la/" + productData.id;
}

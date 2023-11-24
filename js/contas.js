const products = {
  "basica": {price: 'R$9.90', id: '23obGFM'},
  "ferro": {price: 'R$49', id: '1u82wHn'},
  "bronze": {price: 'R$29', id: '1JZaJFs'},
  "prata": {price: 'R$27', id: '2wu848W'},
  "ouro": {price: 'R$24', id: '2En5ReP'},
  "platina": {price: 'R$34', id: '2EzvuAe'},
  "diamante": {price: 'R$49', id: '1Xur6Gr'},
  "ascendente": {price: 'R$57', id: '23myHSd'},
  "imortal": {price: 'R$87', id: '2XNhwZ3'},
  "fa": {price: 'R$97', id: '24bRrGW'},
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

$(document).ready(function() {
  $('#listaContas').change(function() {
      $('.bton').show();

      var src = $(this).find('option:selected').attr('data-img');
      $('img#eloa').attr('src', src);
      $(".form-check-input").prop("checked", false);
  });
});

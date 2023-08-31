const products = {
  "basica": {price: 'R$14.90', id: '23obGFM'},
  "ferro": {price: 'R$39', id: '1WyQRsC'},
  "bronze": {price: 'R$34', id: '1mqpCc1'},
  "prata": {price: 'R$29', id: '1wJtpFQ'},
  "ouro": {price: 'R$30', id: '1RTXfGg'},
  "platina": {price: 'R$44', id: '2Wp8ftD'},
  "diamante": {price: 'R$45', id: '2BYALve'},
  "ascendente": {price: 'R$57', id: '1nNTNzc'},
  "imortal": {price: 'R$87', id: '1WXFsp8'},
  "fa": {price: 'R$97', id: '2QHW1jT'},
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

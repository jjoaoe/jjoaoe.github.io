var planValues = {
    '17j16Hw': 'R$14.90',
    '1WyQRsC': 'R$34',
    '2pNZ38n': 'R$29',
    '1nbWDSn': 'R$34',
    '2Se3YAB': 'R$39',
    '122YuJR': 'R$44',
    '2CXXrF4': 'R$45',
    '1SaFdAY': 'R$50',
    '2X73zVH': 'R$149',
    'FerroPlus': 'R$49',
    'FerroFull': 'R$94',
    'BronzePlus': 'R$40',
    'BronzeFull': 'R$94',
    'SilverPlus': 'R$45',
    'SilverFull': 'R$94',
    'GoldPlus': 'R$50',
    'GoldFull': 'R$94',
    'PlatinaPlus': 'R$55',
    'PlatinaFull': 'R$94',
    'DiamantePlus': 'R$70',
    'DiamanteFull': 'R$94',
    'AscendentePlus': 'R$80',
    'AscendenteFull': 'R$94',
    'ImortalPlus': 'R$120',
    'Imortal': 'R$60',
    'ImortalFull': 'R$128',
    'r': 'R$299',
    'Skins1': 'R$597'
};

function get_value_and_plan() {
    var select = document.getElementById('conta');
    var conta = select.options[select.selectedIndex].value;
    var valor = planValues[conta];
    return {"valor": valor, "conta": conta}
}

$('#conta').change(function() {
    var config = get_value_and_plan()
    $('#price').html(config["valor"])
});

function whats() {    
    var config = get_value_and_plan()

    var text = `${config["conta"]}`
    var url = 'https://mpago.la/'.concat(text);

    window.open(url);
}

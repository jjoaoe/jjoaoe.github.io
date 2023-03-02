function whats() {    
    var config = get_value_and_plan()

    var text = `${config["partidas"]}`
    var url = 'https://mpago.la/'.concat(text);

    window.open(url);
}

$('#partidas').change(function() {
    var config = get_value_and_plan()
    $('#price').html(config["valor"])
});

function get_value_and_plan() {
    var select = document.getElementById('partidas');
    var partidas = select.options[select.selectedIndex].value;

    // Conta Ferro
    if (partidas == '1WyQRsC') {
        var valor = 'R$29'
    }
    
    else if (partidas == 'FerroPlus') {
        var valor = 'R$49'
    }
    
    else if (partidas == 'FerroFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'BronzePlus') {
        var valor = 'R$40'
    }

    // Conta Bronze
    else if (partidas == '2pNZ38n') {
        var valor = 'R$20'
    }
    
    else if (partidas == 'BronzeFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'SilverPlus') {
        var valor = 'R$45'
    }
    
    // Conta Prata
    else if (partidas == '1nbWDSn') {
        var valor = 'R$25'
    }
    
    else if (partidas == 'SilverFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'GoldPlus') {
        var valor = 'R$50'
    }
    
    // Conta Ouro
    else if (partidas == '2Se3YAB') {
        var valor = 'R$30'
    }
    
    else if (partidas == 'GoldFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'PlatinaPlus') {
        var valor = 'R$55'
    }
    
    // Conta Platina
    else if (partidas == '122YuJR') {
        var valor = 'R$35'
    }
    
    else if (partidas == 'PlatinaFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'DiamantePlus') {
        var valor = 'R$70'
    }
    
    // Conta Diamante
    else if (partidas == '2CXXrF4') {
        var valor = 'R$40'
    }
    
    else if (partidas == 'DiamanteFull') {
        var valor = 'R$94'
    }

    else if (partidas == 'AscendentePlus') {
        var valor = 'R$80'
    }

    // Conta Acendente
    else if (partidas == '1SaFdAY') {
        var valor = 'R$50'
    }
    
    else if (partidas == 'AscendenteFull') {
        var valor = 'R$94'
    }    
    
    else if (partidas == 'ImortalPlus') {
        var valor = 'R$120'
    }
    
    else if (partidas == 'Imortal') {
        var valor = 'R$60'
    }
    
    else if (partidas == 'ImortalFull') {
        var valor = 'R$128'
    }
    
    else if (partidas == 'r') {
        var valor = 'R$299'
    }
    
    // Conta Básica
    else if (partidas == '17j16Hw') {
        var valor = 'R$14.90'
    }
    
    // Conta FA Ranked Liberada
    else if (partidas == '2X73zVH') {
        var valor = 'R$49'
    }
    
    // Anúncio Conta Skins #01
    else if (partidas == 'Skins1') {
        var valor = 'R$597'
    }

    return {"valor": valor, "partidas": partidas}
}

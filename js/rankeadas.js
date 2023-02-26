function whats() {    
    var config = get_value_and_plan()

    var text = `${config["partidas"]}`
    var url = 'https://mpago.la/'.concat(text);

    window.open(url);
}

// https://mpago.la/17j16Hw

$('#partidas').change(function() {
    var config = get_value_and_plan()
    $('#price').html(config["valor"])
});

function get_value_and_plan() {
    var select = document.getElementById('partidas');
    var partidas = select.options[select.selectedIndex].value;

    if (partidas == 'Ferro') {
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
    
    else if (partidas == 'Bronze') {
        var valor = 'R$20'
    }
    
    else if (partidas == 'BronzeFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'SilverPlus') {
        var valor = 'R$45'
    }
    
    else if (partidas == 'Silver') {
        var valor = 'R$25'
    }
    
    else if (partidas == 'SilverFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'GoldPlus') {
        var valor = 'R$50'
    }
    
    else if (partidas == 'Gold') {
        var valor = 'R$30'
    }
    
    else if (partidas == 'GoldFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'PlatinaPlus') {
        var valor = 'R$55'
    }
    
    else if (partidas == 'Platina') {
        var valor = 'R$35'
    }
    
    else if (partidas == 'PlatinaFull') {
        var valor = 'R$94'
    }
    
    else if (partidas == 'DiamantePlus') {
        var valor = 'R$70'
    }
    
    else if (partidas == 'Diamante') {
        var valor = 'R$40'
    }
    
    else if (partidas == 'DiamanteFull') {
        var valor = 'R$94'
    }

    else if (partidas == 'AscendentePlus') {
        var valor = 'R$80'
    }

    else if (partidas == 'Ascendente') {
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
    
    else if (partidas == '17j16Hw') {
        var valor = 'R$14.90'
    }
    
    else if (partidas == 'SemEloFull') {
        var valor = 'R$49'
    }
    
    else if (partidas == 'Skins3') {
        var valor = 'R$597'
    }

    return {"valor": valor, "partidas": partidas}
}

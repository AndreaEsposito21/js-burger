//
var prezzoBasePanino = 4;
document.getElementById('final-price').innerHTML = prezzoBasePanino + '€';

// Funzione del bottone che genera il calcolo delle aggiunte e sconti al prezzo
var calcola = document.getElementById('calcola');
calcola.addEventListener('click', function() {

    //
    var nomePanino = document.getElementById('nome-panino');
    console.log(nomePanino);
    if (nomePanino === nomePanino.value) {
        alert('Non hai inserito nessun nome al panino!');
    }
    console.log(nomePanino.value);

    // Aggiunte del prezzo degli ingredienti
    var addPriceCheckbox = document.getElementsByClassName('addprice');
    for ( var i = 0; i < addPriceCheckbox.length; i++) {
        var thisCheckbox = addPriceCheckbox[i];

        if ( thisCheckbox.checked == true ) {
            var thisAddPrice = parseFloat(thisCheckbox.value);
            prezzoBasePanino += thisAddPrice;
        }
    }

    // Aggiunte di un'eventuale sconto se si inserisce il coupon
    var codiciSconto = ['L75TR62SY4C', 'G06A7BE1IH', 'M94VO3X08WZ'];
    var discountCoupon = document.getElementById('coupon');
    for(var j = 0; j < codiciSconto.length; j++) {
        var thisCodiceSconto = codiciSconto[j];

        if (discountCoupon.value == thisCodiceSconto) {
            prezzoBasePanino = prezzoBasePanino - (prezzoBasePanino * 0.2);
        }

    }

    // Prezzo finale Stampato
    var prezzoFinale = prezzoBasePanino.toFixed(2);
    document.getElementById('final-price').innerHTML = prezzoFinale + '€';
})


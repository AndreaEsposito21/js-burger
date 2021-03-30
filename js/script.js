//

var prezzoBasePanino = 4;
document.getElementById('final-price').innerHTML = prezzoBasePanino + '€';

//
var calcola = document.getElementById('calcola');
calcola.addEventListener('click', function() {
    
    

    var addPriceCheckbox = document.getElementsByClassName('addprice');
    for ( var i = 0; i < addPriceCheckbox.length; i++) {
        var thisCheckbox = addPriceCheckbox[i];

        if ( thisCheckbox.checked == true ) {
            var thisAddPrice = parseFloat(thisCheckbox.value);
            prezzoBasePanino += thisAddPrice;
        }
    }

    var prezzoFinale = prezzoBasePanino.toFixed(2);
    document.getElementById('final-price').innerHTML = prezzoFinale + '€';
})
//

var prezzoBasePanino = 4;
document.getElementById('final-price').innerHTML = prezzoBasePanino + '€';

//
var calcola = document.getElementById('calcola');
calcola.addEventListener('click', function() {
    
    
    //
    var addPriceCheckbox = document.getElementsByClassName('addprice');
    for ( var i = 0; i < addPriceCheckbox.length; i++) {
        var thisCheckbox = addPriceCheckbox[i];

        if ( thisCheckbox.checked == true ) {
            var thisAddPrice = parseFloat(thisCheckbox.value);
            prezzoBasePanino += thisAddPrice;
        }
    }

    //
    var codiciSconto = ['L75TR62SY4C', 'G06A7BE1IH', 'M94VO3X08WZ']
    var discountCoupon = document.getElementById('coupon');
    for(var j = 0; j < codiciSconto.length; j++) {
        var thisCodiceSconto = codiciSconto[j];

        if (discountCoupon.value == thisCodiceSconto) {
            prezzoBasePanino = prezzoBasePanino - (prezzoBasePanino * 0.2);
        }

    }

    //
    var prezzoFinale = prezzoBasePanino.toFixed(2);
    document.getElementById('final-price').innerHTML = prezzoFinale + '€';
})


var setRemainder = function( change, coinValue ) {
  return change % coinValue
};

var makeChange = function( change, coins ) {
  var centsRemainder = change * 100
  return coins.map( function( coin ) {
    if ( coin === 0 ) {
      return 0;
    } else {
      var coinAmount =  ( Math.floor(centsRemainder / coin ));
      centsRemainder = setRemainder( centsRemainder, coin );
      return coinAmount;
    }
  });
};

var coinString = function( coins ) {
  var coinStrings = [];
  var singulars = ["quarter", "dime", "nickel", "penny"];
  var plurals = ["quarters", "dimes", "nickels", "pennies"];
  var count = 0;
  coins.forEach(function( coinCounts ){
    if ( coins[count] > 0){
      coinStrings.push(pluralize( coins[count], singulars[count], plurals[count] ));
    }
    count++;
  });
  return createChangeString(coinStrings);
};

var pluralize = function( integer, singular, plural ){
  if ( integer === 1 ) {
    return integer + " " + singular;
  } else {
    return integer + " " + plural;
  }
};

var createChangeString = function(coinStrings) {
  var lastCoin = coinStrings.pop();
  if ( coinStrings.length === 0 ) {
    return lastCoin;
  } else {
    return coinStrings.join(", ") + " and " + lastCoin;
  }
};

$(function(){
  $("#change_maker").submit(function(event){
    $('.results').fadeOut("fast");
    // $(".coins").animate( {margin: "-5000px 0px 0px 0px"}, "slow" );
    $(".coins").remove();

    var coins = [0, 0, 0, 0];
    var userChange = parseFloat($("#change").val());
    if ($("#25").is(':checked')) {
      coins[0] = 25;
    }
    if ($("#10").is(':checked')) {
      coins[1] = 10;
    }
    if ($("#5").is(':checked')) {
      coins[2] = 5;
    }
    if ($("#1").is(':checked')) {
      coins[3] = 1;
    }

    var coinAmounts = makeChange(userChange, coins);
    for(var i=0; i < coinAmounts[0]; i++) {
      $('#bank').append('<img src="img/quarter.png" class="coins"/>');
    }
    for(var i=0; i < coinAmounts[1]; i++) {
      $('#bank').append('<img src="img/dime.png" class="coins"/>');
    }
    for(var i=0; i < coinAmounts[2]; i++) {
      $('#bank').append('<img src="img/nickel.png" class="coins"/>');
    }
    for(var i=0; i < coinAmounts[3]; i++) {
      $('#bank').append('<img src="img/penny.png" class="coins"/>');
    }

    var coinsText = coinString(coinAmounts);
    $('#change_given').text(coinsText);
    $('.results').toggle(function() {
      $(this).fadeIn(400);
    });

    event.preventDefault();
  });

  $("#make_it_rain").click(function(){
    $(".coins").animate( {margin: "0px 0px 0px 0px"}, "slow" );
  });

});

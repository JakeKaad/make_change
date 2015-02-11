var setRemainder = function( change, coinValue ) {
  return change % coinValue
};

var makeChange = function( change ) {
  var coins =[ 25, 10, 5, 1 ]
  var centsRemainder = change * 100
  return coins.map( function( coin ) {
    var coinAmount =  ( Math.floor(centsRemainder / coin ));
    centsRemainder = setRemainder( centsRemainder, coin );
    return coinAmount;
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

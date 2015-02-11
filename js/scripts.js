// var makeChange = function(change){
//   var
//   coins = [],
//   centsRemainder = parseInt(change * 100);
//
//   coins.push(Math.floor(centsRemainder / 25));
//   centsRemainder = setRemainder(centsRemainder, 25);
//   coins.push(Math.floor(centsRemainder / 10));
//   centsRemainder = setRemainder(centsRemainder, 10);
//   coins.push(Math.floor(centsRemainder / 5));
//   centsRemainder = setRemainder(centsRemainder, 5);
//   coins.push(centsRemainder);
//   return coins;
// };

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
  if ( coins[0] > 0){
    coinStrings.push(pluralize( coins[0], "quarter", "quarters" ));
  }
  if ( coins[1] > 0){
    coinStrings.push(pluralize( coins[1], "dime", "dimes" ));
  }
  if ( coins[2] > 0){
    coinStrings.push(pluralize( coins[2], "nickel", "nickels" ));
  }
  if ( coins[3] > 0){
    coinStrings.push(pluralize( coins[3], "penny", "pennies" ));
  }
  //  if ( coinStrings.length === 1 ) {
  //    return coinStrings[0];
  //  } else if ( coinStrings.length === 2) {
  //    return coinStrings[0] + " and " + coinStrings[1];
  //  } else if ( coinStrings.length === 3) {
  //    return coinStrings[0] + ", " + coinStrings[1] + " and " + coinStrings[2];
  //  } else if ( coinStrings.length === 4) {
  //    return coinStrings[0] + ", " + coinStrings[1] + ", " + coinStrings[2] + " and " + coinStrings[3];
  //  }
  var lastCoin = coinStrings.pop();
  if ( coinStrings.length === 0){
    return lastCoin
  } else {
      return coinStrings.join(", ") + " and " + lastCoin;
  }


  //  else if ( coinStrings.length > 2) {
  //    var lastString = " and " + coinStrings.last;
  //    var firstString = "";
  //    for( var i = 0; i > coinStrings.length - 1; i++ ) {
  //      firstString = concat(coinStrings[i] + ", " + firstString);
  //    }
  //   return firstString + lastString;
  //  }
};

var pluralize = function( integer, singular, plural ){
  if ( integer === 1 ) {
    return integer + " " + singular;
  } else {
    return integer + " " + plural;
  }
};

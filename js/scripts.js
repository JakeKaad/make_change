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

var setRemainder = function(change, coinValue) {
  return change % coinValue
};

var makeChange = function(change){
  var coins =[25,10,5,1]
  var centsRemainder = change * 100
  return coins.map(function(coin) {
    var coinAmount =  (Math.floor(centsRemainder / coin));
    centsRemainder = setRemainder(centsRemainder, coin);
    return coinAmount;
  });
};

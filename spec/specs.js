describe("makeChange", function(){

  it("returns the array [ 0, 0, 0, 1 ] when the change is .01", function(){
    expect(makeChange(0.01, [ 25, 10, 5, 1 ])).to.eql([0, 0, 0, 1]);
  });

  it("returns appropriate array when given change of .04", function(){
    expect(makeChange(0.04, [ 25, 10, 5, 1 ])).to.eql([0, 0, 0, 4]);
  });

  it("returns an array with pennies and nickels", function(){
    expect(makeChange(0.07, [ 25, 10, 5, 1 ])).to.eql([0, 0, 1, 2]);
  });

  it("returns an array with pennies, nickels, and dimes", function(){
    expect(makeChange(0.16, [ 25, 10, 5, 1 ])).to.eql([0, 1, 1, 1]);
  });

  it("returns an array with pennies, nickels, dimes, and quarters", function(){
    expect(makeChange(0.41, [ 25, 10, 5, 1 ])).to.eql([1, 1, 1, 1]);
  });

  it("returns an array with pennies, nickels, dimes, and quarters", function(){
    expect(makeChange(0.99, [ 25, 10, 5, 1 ])).to.eql([3, 2, 0, 4]);
  });

  it("returns proper change given a coin shortage", function(){
    expect(makeChange(0.99, [ 25, 0, 5, 1 ])).to.eql([3, 0, 4, 4]);
  });

  it("returns proper change non standard coins", function(){
    expect(makeChange(0.99, [ 30, 10, 1 ])).to.eql([3, 0, 9]);
  });
});


describe("coinString", function(){

  it("returns a singular string when its 1 penny", function(){
    expect(coinString([0, 0, 0, 1])).to.equal("1 penny");
  });

  it("returns a plural string when its 2 pennies", function(){
    expect(coinString([0, 0, 0, 2])).to.equal("2 pennies");
  });

  it("returns a string representing nickels and pennies", function(){
    expect(coinString([0, 0, 1, 2])).to.equal("1 nickel and 2 pennies");
  });

  it("returns a string representing dimes, nickels and pennies", function(){
    expect(coinString([0, 2, 1, 2])).to.equal("2 dimes, 1 nickel and 2 pennies");
  });

  it("returns a string even when none of some coins are needed", function(){
    expect(coinString([3, 0, 1, 0])).to.equal("3 quarters and 1 nickel");
  });

  it("returns a string for an only quarters situation", function(){
    expect(coinString([3, 0, 0, 0])).to.equal("3 quarters");
  });

});

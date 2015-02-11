describe("makeChange", function(){

  it("returns the array [ 0, 0, 0, 1 ] when the change is .01", function(){
    expect(makeChange(0.01)).to.eql([0, 0, 0, 1]);
  });

  it("returns appropriate array when given change of .04", function(){
    expect(makeChange(0.04)).to.eql([0, 0, 0, 4]);
  });

  it("returns an array with pennies and nickels", function(){
    expect(makeChange(0.07)).to.eql([0, 0, 1, 2]);
  });

  it("returns an array with pennies, nickels, and dimes", function(){
    expect(makeChange(0.16)).to.eql([0, 1, 1, 1]);
  });

  it("returns an array with pennies, nickels, dimes, and quarters", function(){
    expect(makeChange(0.41)).to.eql([1, 1, 1, 1]);
  });

  it("returns an array with pennies, nickels, dimes, and quarters", function(){
    expect(makeChange(0.99)).to.eql([3, 2, 0, 4]);
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

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

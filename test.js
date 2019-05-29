var expect = require('chai').expect,
    makeCurry = require('./src/js/main');
describe("makeCurry", function () {
   it("makeCurry should return a function", function () {
      var add = function(){};
      expect(makeCurry(add)).to.be.a('function');
   });
   it("sum of arguments is right", function () {
      expect(makeCurry(1)(2)()).to.eq(3);
      expect(makeCurry(10)(20)(1)(5)(4)()).to.eq(40);
      expect(makeCurry(1)(2)(4)(5)(6)(7)(8)()).to.eq(33);
   });
});
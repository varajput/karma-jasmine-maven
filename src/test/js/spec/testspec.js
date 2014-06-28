
  describe("test", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'src/test/fixtures/';
        jasmine.getStyleFixtures().fixturesPath = 'src/test/fixtures/';
        loadStyleFixtures('mycssfixture.css');
        loadFixtures('myfixture.html');
        if ( typeof ( console ) !== 'undefined' && console != null) {
            console.log("Log exists!");
        }
        else {
            console = {
                log: function () {},
                warn: function () {},
                error: function () {}
            }
        }
    });
    it("test", function() {
      var returnVal = fun1();
      expect(returnVal).toEqual(5);
    });
    it('test height',function(){
       var divHeight = checkHeight();
       expect(divHeight).toEqual(500);

    });
});

describe("test", function () {
    beforeEach(function () {
        var path = '';
        if (typeof window.__karma__ !== 'undefined') {
            path += 'base/'
        }
        jasmine.getFixtures().fixturesPath = path + 'test/fixtures/';
        // jasmine.getStyleFixtures().fixturesPath = path + 'test/fixtures/';
        //  loadStyleFixtures('mycssfixture.css');
        loadFixtures('myfixture.html');
        if (typeof ( console ) === 'undefined' || console == null) {
            console = {
                log: function () {
                },
                warn: function () {
                },
                error: function () {
                }
            }
        }
    });
    it("test", function () {
        var returnVal = fun1();
        expect(returnVal).toEqual(5);
    });
    it('test height', function () {
        var divHeight = checkHeight();
        expect(divHeight).toEqual(500);

    });
});

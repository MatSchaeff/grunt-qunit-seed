(function() {
    module("test module", {
        setup: function () {
        },
        teardown: function () {
        }
    });

    test("a test", function () {
        var val = true;
        strictEqual(true, val, 'true is true');
    });

    test("a second test", function () {
        var val = false;
        strictEqual(false, val, 'false is false, which is true');
    });
})();


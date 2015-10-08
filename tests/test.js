QUnit.test('assertions', function(assert) {
    assert.ok(1 == 1, 'one equals one');
});

 QUnit.test("should get a nextprot valid id", function (assert) {
    var done = assert.async();
     console.log("begin async");
    $.getJSON("https://api.myjson.com/bins/29tqi", function( data ) {
        console.log("entering the json");
        console.log(data);
        assert.equal("NX_P01308", data.entry.uniqueName, 'expect 18 properties');
        done();
    }, function (error) {
        console.log("error");
        console.log(error);
        assert.notOk("failed to load...");
        done();
    });
});

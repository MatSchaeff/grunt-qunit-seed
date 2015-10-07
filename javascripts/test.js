QUnit.test("should get a nextprot valid id", function (assert) {
    var done = assert.async();
    $.getJSON("https://api.nextprot.org/entry/NX_P01308/overview.json", function( data ) {
        console.log(data);
        assert.equal("NX_P01308", data.entry.uniqueName, 'expect 18 properties');
        done();
    });
});

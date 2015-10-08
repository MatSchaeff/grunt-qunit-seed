QUnit.test('assertions', function(assert) {
    assert.ok(1 == 1, 'one equals one');
});

 QUnit.test("should get a nextprot valid id", function (assert) {
    var done = assert.async();
     console.log("begin async");
    $.getJSON("https://api.nextprot.org/entries/search/peptide?peptide=FVNQHLCGSH&modeIL=true&clientInfo=nextprotTeam&applicationName=PeptideViewer.json", function( data ) {
        console.log("entering the json");
        console.log(data);
        assert.equal("NX_F8WCM5", data[0].uniqueName, 'expect 18 properties');
        done();
    }, function (error) {
        console.log("error");
        console.log(error);
        assert.notOk("failed to load...");
        done();
    });
});

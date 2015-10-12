QUnit.test('assertions', function (assert) {
    assert.ok(1 == 1, 'one equals one');
});

//jQuery.support.cors = true;
QUnit.test("should get a nextprot valid id", function (assert) {
    var done = assert.async();
    console.log("begin async");
    $.ajax({
        url: 'https://api.nextprot.org/entry/NX_P01308/overview.json',
        async: true,
        timeout: 20000,
        dataType: "json",
        success: function (data) {
            console.log(data);
            assert.equal("NX_P01308", data.entry.uniqueName, 'expect 18 properties');
            done();

            // doing rest of stuff
        },
        error: function(jqXHR, textStatus, ex) {
            console.log("Error spotted");
            alert(textStatus + "," + ex + "," + jqXHR.responseText);
        }
    });
});
//QUnit.test("should get a nextprot valid id", function (assert) {
//    var done = assert.async();
//    console.log("begin async");
//    $.getJSON("overview.json", function (data) {
//        console.log("entering the json");
//        console.log(data);
//        assert.equal("NX_P01308", data.entry.uniqueName, 'expect 18 properties');
//        done();
//    }, function (error) {
//        console.log("error");
//        console.log(error);
//        assert.notOk("failed to load...");
//        done();
//    });
//});
//QUnit.test("should get a nextprot valid id", function (assert) {
//    var done = assert.async();
//    console.log("begin async");
//    $.getJSON("https://api.nextprot.org/sparql-prefixes.json", function (data) {
//        console.log("entering the json");
//        console.log(data);
//        assert.equal("PREFIX : <http://nextprot.org/rdf#>", data[0], 'expect 18 properties');
//        done();
//    }, function (error) {
//        console.log("error");
//        console.log(error);
//        assert.notOk("failed to load...");
//        done();
//    });
//});

//$.getJSON("https://api.nextprot.org/entries/search/peptide?peptide=FVNQHLCGSH&modeIL=true&clientInfo=nextprotTeam&applicationName=PeptideViewer.json", function (data) {
//    console.log("entering the json");
//    console.log(data);
//    assert.equal("NX_F8WCM5", data[0].uniqueName, 'expect 18 properties');
//    done();
//}, function (error) {
//    console.log("error");
//    console.log(error);
//    assert.notOk("failed to load...");
//    done();
//});

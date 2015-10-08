QUnit.test('assertions', function(assert) {
    assert.ok(1 == 1, 'one equals one');
});

 QUnit.test("should get a nextprot valid id", function (assert) {
    var done = assert.async();
     console.log("begin async");
    $.getJSON("https://api.nextprot.org/sparql?output=json&query=PREFIX%20%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%23%3E%0APREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0APREFIX%20up%3A%20%3Chttp%3A%2F%2Fpurl.uniprot.org%2Fcore%2F%3E%0APREFIX%20xsd%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX%20entry%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fentry%2F%3E%0APREFIX%20isoform%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fisoform%2F%3E%0APREFIX%20annotation%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fannotation%2F%3E%0APREFIX%20evidence%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fevidence%2F%3E%0APREFIX%20xref%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fxref%2F%3E%0APREFIX%20publication%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fpublication%2F%3E%0APREFIX%20identifier%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fidentifier%2F%3E%0APREFIX%20cv%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fterminology%2F%3E%0APREFIX%20gene%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fgene%2F%3E%0APREFIX%20source%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fsource%2F%3E%0APREFIX%20db%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fdb%2F%3E%0APREFIX%20context%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Fcontext%2F%3E%0APREFIX%20interaction%3A%20%3Chttp%3A%2F%2Fnextprot.org%2Frdf%2Finteraction%2F%3E%0APREFIX%20skos%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0APREFIX%20uniprot%3A%20%3Chttp%3A%2F%2Fpurl.uniprot.org%2Funiprot%2F%3E%0APREFIX%20unipage%3A%20%3Chttp%3A%2F%2Fwww.uniprot.org%2Funiprot%2F%3E%0ASELECT%20%3Fptmtype%20%3Fptmstart%20%3Fptmend%20%3Fmapstart%20%3Fmapend%20%3Fptmterm%20%3Fptmcomment%20WHERE%20%7Bvalues%20(%3FpepName%20%3Fiso)%20%7B(%22NX_PEPT01997465%22%5E%5Exsd%3Astring%20isoform%3ANX_P01308-1)%20%7D%3Fiso%20%3Aptm%20%3Fptm%20.%3Fptm%20rdf%3Atype%20%3Fptmtype%20.%3Fptm%20%3Astart%20%3Fptmstart%20.%3Fptm%20%3Aend%20%3Fptmend%20.optional%20%7B%20%3Fptm%20%3Aterm%20%3Fptmterm%20%7D.optional%20%7B%20%3Fptm%20rdfs%3Acomment%20%3Fptmcomment%7D%20.%3Fiso%20%3Amapping%20%3Fmap%20.%3Fmap%20%3ApeptideName%20%3FpepName%20.%3Fmap%20%3Astart%20%3Fmapstart%20.%3Fmap%20%3Aend%20%3Fmapend%20.filter%20(%3Fptmstart%20%3E%3D%20%3Fmapstart%20%26%26%20%3Fptmstart%20%3C%3D%20%3Fmapend%20%7C%7C%20%3Fptmend%20%3E%3D%20%3Fmapstart%20%26%26%20%3Fptmend%20%3C%3D%20%3Fmapend)%20filter%20not%20exists%20%7B%3Fmap%20a%20%3APdbMapping%7D%7D&clientInfo=nextprotTeam&applicationName=PeptideViewer.json", function( data ) {
        console.log("entering the json");
        console.log(data);
        assert.equal(false, data.results.distinct, 'expect false !');
        done();
    }, function (error) {
        console.log("error");
        console.log(error);
        assert.notOk("failed to load...");
        done();
    });
});

$.getScript('js/Table.js', function() {
    $.getScript('js/FormulaLine.js', function() {
        var formulaLine = new FormulaLine($('input[name=mathbar]'));
        var table = new Table(10, 50, $('main'), formulaLine);
    });
});
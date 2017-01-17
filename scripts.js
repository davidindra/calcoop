$.getScript('js/Cell.js', function () {
    $.getScript('js/Row.js', function () {
        $.getScript('js/Table.js', function () {
            $.getScript('js/FormulaLine.js', function () {
                window.formulaLine = new FormulaLine($('input[name=mathbar]'));
                window.table = new Table(10, 50, $('main'), formulaLine);
            });
        });
    });
});
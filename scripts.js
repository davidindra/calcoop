$.getScript('js/Cell.js', function () {
    $.getScript('js/Row.js', function () {
        $.getScript('js/Table.js', function () {
            window.table = new Table(10, 50, $('main'), $('input[name=mathbar]'));
        });
    });
});
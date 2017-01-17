class Cell {
    constructor(container, row, table, formulaLine) {
        this.ref = $('<div class="cell"></div>');
        this.input = $('<input type="text">');
        this.ref.append(this.input);
        container.append(this.ref);

        this.row = row;
        this.table = table;
        this.formulaLine = formulaLine;

        this.active = false;

        var hash = Math.round(Math.random() * 1000000);
        this.hash = hash;

        this.input.on('focus.', {cell: this}, this.onFocus);
        this.input.on('focusout.', {cell: this}, this.onFocusOut);
        this.input.on('keyup.', {cell: this}, this.onKey);
    }

    get value(){
        return this.input.val();
    }

    set value(val){
        this.input.val(val);
    }

    onFocus(e){
        e.data.cell.active = true;
        e.data.cell.ref.addClass('active');

        e.data.cell.formulaLine.removeAttr('disabled');
        e.data.cell.formulaLine.attr('placeholder', 'Formula line for #' + e.data.cell.hash);
        e.data.cell.formulaLine.val(e.data.cell.value);

        console.log(e.data.cell.hash + ' active ');
    }

    onFocusOut(e){
        e.data.cell.active = false;
        e.data.cell.ref.removeClass('active');

        e.data.cell.formulaLine.attr('disabled', 'disabled');
        e.data.cell.formulaLine.attr('placeholder', 'Formula line');
        e.data.cell.formulaLine.val('');

        console.log(e.data.cell.hash + ' inactive ');
    }

    onKey(e){
        if(e.data.cell.active) { // should always be
            e.data.cell.formulaLine.val(e.data.cell.input.val());
        }
    }
}

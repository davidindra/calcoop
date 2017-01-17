class Row {
    constructor(cols, container, table, formulaLine) {
        this.ref = $('<div class="row">');
        container.append(this.ref);

        this.table = table;
        this.formulaLine = formulaLine;

        this.cells = [];
        for(var i = 0; i < cols; i++){
            this.cells.push(new Cell(this.ref, this, this.table, this.formulaLine));
        }
    }
}

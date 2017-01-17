class Table {
    constructor(cols, rows, container, formulaLine) {
        this.rows = [];
        for(var i = 0; i < rows; i++){
            this.rows.push(new Row(cols, container));
        }
    }
}

class Row {
    constructor(cols, container) {
        this.ref = $('<div class="row">');
        container.append(this.ref);

        this.cells = [];
        for(var i = 0; i < cols; i++){
            this.cells.push(new Cell(this.ref));
        }
    }
}

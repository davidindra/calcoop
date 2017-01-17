class Cell {
    constructor(container) {
        this.ref = $('<div class="cell">*</div>');
        container.append(this.ref);
    }
}

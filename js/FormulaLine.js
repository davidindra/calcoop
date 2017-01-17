class FormulaLine {
    constructor(input) {
        input.on('keyup', this.keyPressed);
        this.input = input;
    }

    keyPressed(){
        this.value = $(this).val();
        console.log('FL:' + this.value);
    }
}
class FormulaLine {
    constructor(input) {
        input.on('keyup', this.keyPressed);
        this.ref = input;
    }

    keyPressed(){
        this.value = $(this).val();
        console.log('FL:' + this.value);
    }
}
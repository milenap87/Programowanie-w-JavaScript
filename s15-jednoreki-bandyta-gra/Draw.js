class Draw {
    constructor() {
        this.options = ['cornflowerblue', 'orchid', 'ghostwhite'];
        let _result = this.drawResult();
        this.getResult = () => _result;
    }

    drawResult() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            // console.log(color);
            colors.push(color);
        }
        return colors;
    }
}
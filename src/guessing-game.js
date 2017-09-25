class GuessingGame
{
    constructor() {}

    setRange( min,  max) {
    this.min=min;
    this.max=max;
    }

    guess() {

        return Math.ceil( (this.max+this.min)/2 );
    }

    lower() {
        if(Math.ceil((this.max+this.min)/2) - (this.min+this.max)/2 > 0)
            this.max = parseInt((this.max+this.min)/2 )+1;
        else
            this.max = parseInt((this.max+this.min)/2 );

    }

    greater() {
        if(Math.ceil((this.max+this.min)/2) - (this.min+this.max)/2 > 0)
            this.min = parseInt((this.max + this.min) / 2)+1;
        else
            this.min = parseInt((this.max+this.min)/2 );

    }
}
module.exports = GuessingGame;

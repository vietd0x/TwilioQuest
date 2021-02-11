class Ducktypium {
    constructor(color) {
        this.calibrationSequence = [];
        if(color == 'red' || color == 'blue' || color == 'yellow')
            this.color = color;
        else
            throw 'Color must be red, yellow, or blue!';
    }
    refract(secondColor){
        if(this.color == 'red' && secondColor == 'blue' || this.color == 'blue' && secondColor == 'red')
            return 'purple';
        else if (this.color == 'red' && secondColor == 'yellow' || this.color == 'yellow' && secondColor == 'red')
            return 'orange';
        else if (this.color == 'blue' && secondColor == 'yellow' || this.color == 'yellow' && secondColor == 'blue')
            return 'green';
        else if(this.color == secondColor)
            return this.color;
        else
            return 'Color must be red, yellow, or blue!';
    }
    calibrate(Arr){
        this.calibrationSequence =  Arr.sort().map(item => 3 * item);
    }
}


const dt = new Ducktypium('red');
console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);
console.log(dt.calibrationSequence); // prints [3, 9, 15]
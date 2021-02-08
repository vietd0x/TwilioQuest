class TargetingSolution{
    constructor(config){
        for(let i in config){
            this[i] = config[i];
        }
    }
    target(){
        return '('+ this.x + ', ' + this.y + ', ' + this.z+')';
    }
}
// node .\targetingSolution.js
// used by you to test your solution.
const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900
  });
console.log(m.target()); // would print "(10, 15, 900)"
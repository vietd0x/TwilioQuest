class Materializer{
    constructor(targetName){
        this.target = targetName;
        this.activated = false;
    }
    
    activate(){
        this.activated = true;
    }
    materialize(){
        if(this.activated){
            return this.target;
        }
        else
            return undefined;
    }
}
// node node .\classes.js
// used by you to test your solution.
const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
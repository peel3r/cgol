/**
 * Created by peeler on 05/05/15.
 */


(function () {

    var _ = self.Life = function(seed){
        this.seed = seed;
        this.height = seed.length;
        this.width = seed[0].length

        
    };

    _.prototype = {
        next: function () {

        },
        toString: function () {

        }
    };

})();

var game = new Life([
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0]
]);

console.log(game + '');
game.next();
console.log(game  + '');
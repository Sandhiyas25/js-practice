// A Planet constructor

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet = new Planet("Jupiter", 5, "Gas Giant" );
var planet = new Planet("Saturn", 6, "Gas Giant");

planet.showPlanet(planet);
planet.showPlanet(planet);



/* Further Adventures
 *
 * 1) Use the Planet constructor function
 *    to create a second planet.
 *    Don't forget the 'new' keyword.
 *
 * 2) Call the showPlanet method on your
 *    newly created planet.
 *
 */

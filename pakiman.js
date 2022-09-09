//pokemon images
var images = [];
images["Pikachu"] = "images/pikachu.png";
images["Squirtle"] = "images/squirtle.png";
images["Charmander"] = "images/charmander.png";
images["Bulbasaur"] = "images/bulbasur.png";
images["Raichu"] = "images/raichu.png";
images["Charmeleon"] = "images/charmeleon.png";
images["Wartortle"] = "images/wartortle.png";
images["Ivysaur"] = "images/ivysaur.png";
//new pokemon
var pokeDex = [];
pokeDex.push(new Pokemon("Pikachu", 100, 80, 140, 60, 80));
pokeDex.push(new Pokemon("Squirtle", 80, 30, 50, 120, 90));
pokeDex.push(new Pokemon("Charmander", 120, 50, 70, 80, 58));
pokeDex.push(new Pokemon("Bulbasaur", 140, 70, 85, 29, 100));
pokeDex.push(new Pokemon("Raichu", 180, 95, 150, 70, 170));
pokeDex.push(new Pokemon("Wartortle", 210, 70, 91, 70, 230));
pokeDex.push(new Pokemon("Charmeleon", 180, 95, 70, 90, 190));
pokeDex.push(new Pokemon("Ivysaur", 200, 120, 80, 90, 215));
//show pokemon
function showPokemon() {
  for (var pokemon of pokeDex) {
    pokemon.show(180, 180);
  }
}

showPokemon();

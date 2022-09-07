
//pokemon images
var images = [];
images['Pikachu'] = 'images/pikachu.png';
images['Squirtle'] = 'images/squirtle.png';
images['Charmander'] ='images/charmander.png'; 

//new pokemon
var pokeDex = [];
pokeDex.push(new Pokemon('Pikachu',100,80,140,60,80));
pokeDex.push(new Pokemon('Squirtle',80,30,50,120,90));
pokeDex.push(new Pokemon('Charmander',120,50,70,80,58));

//show pokemon
function showPokemon(){
    for (var pokemon of pokeDex) {
        pokemon.show(150,150);
    }
}

showPokemon();



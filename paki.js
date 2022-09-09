//create the
let divContainer = document.getElementById("container");
class Pokemon {
  constructor(name, life, attack, special_attack, defense, special_defense) {
    this.image = new Image();
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.special_attack = special_attack;
    this.defense = defense;
    this.special_defense = special_defense;
    this.image.src = images[this.name];
  }
  show(heigth, width) {
    // var divContent = document.createElement('#pokedivbox')
    // divContent.querySelector('img').src = ''//imagen;
    // divContent.querySelector('#id-cosovida').text = '100';

    // -----------------
    var divContent = document.createElement("div");
    var title = document.createElement("h2");
    title.innerHTML = this.name;
    divContent.setAttribute("class", "divbox");
    var lineBreak = document.createElement("br");
    divContent.appendChild(this.image);
    divContent.appendChild(lineBreak);
    divContent.appendChild(title);
    divContainer.appendChild(divContent);
    this.image.height = heigth;
    this.image.width = width;

    var collection = {
      "Life ": this.life,
      "Attack ": this.attack,
      "Special Attack ": this.special_attack,
      "Defense ": this.defense,
      "Special Defense ": this.special_defense,
    };
    title.setAttribute("class", "title");
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    for (var stat in collection) {
      var showStats =
        "<tr><td> " +
        stat +
        " </tr></td><tr><td>\
      " +
        collection[stat] +
        " </tr></td>";

      var file = document.createElement("tr");
      file.innerHTML = showStats;
      tbody.appendChild(file);
    }
    table.appendChild(tbody);
    divContent.appendChild(table);
  }
}
